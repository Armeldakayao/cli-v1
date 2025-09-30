#!/usr/bin/env node

import { Command } from 'commander';
import fs from 'fs-extra';
import path from 'path';
import axios from 'axios';
import yaml from 'js-yaml';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

interface SwaggerProperty {
  type?: string;
  format?: string;
  items?: SwaggerProperty;
  $ref?: string;
  enum?: string[];
  properties?: { [key: string]: SwaggerProperty };
  required?: string[];
}

interface SwaggerParameter {
  name: string;
  in: 'query' | 'path' | 'body' | 'header';
  required?: boolean;
  type?: string;
  schema?: SwaggerProperty;
}

interface SwaggerResponse {
  description: string;
  schema?: SwaggerProperty;
  content?: {
    [mediaType: string]: {
      schema: SwaggerProperty;
    };
  };
}

interface SwaggerEndpoint {
  summary?: string;
  operationId?: string;
  parameters?: SwaggerParameter[];
  requestBody?: {
    content: {
      [mediaType: string]: {
        schema: SwaggerProperty;
      };
    };
    required?: boolean;
  };
  responses: {
    [statusCode: string]: SwaggerResponse;
  };
}

interface SwaggerSpec {
  paths: {
    [path: string]: {
      [method: string]: SwaggerEndpoint;
    };
  };
  components?: {
    schemas?: {
      [name: string]: SwaggerProperty;
    };
  };
  definitions?: {
    [name: string]: SwaggerProperty;
  };
}

class SwaggerToTanStackGenerator {
  private spec: SwaggerSpec;
  private baseUrl: string;
  private outputDir: string;

  constructor(spec: SwaggerSpec, baseUrl: string, outputDir: string) {
    this.spec = spec;
    this.baseUrl = baseUrl;
    this.outputDir = outputDir;
  }

  private capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  private toCamelCase(str: string): string {
    return str
      .replace(/[-_](.)/g, (_, char) => char.toUpperCase())
      .replace(/^(.)/, (char) => char.toLowerCase());
  }

  private toPascalCase(str: string): string {
    return this.capitalize(this.toCamelCase(str));
  }

  private extractRefName(ref: string): string {
    return ref.split('/').pop() || '';
  }

  private typeScriptType(property: SwaggerProperty, schemas: any): string {
    if (property.$ref) {
      return this.extractRefName(property.$ref);
    }

    switch (property.type) {
      case 'string':
        if (property.enum) {
          return property.enum.map(e => `'${e}'`).join(' | ');
        }
        return 'string';
      case 'number':
      case 'integer':
        return 'number';
      case 'boolean':
        return 'boolean';
      case 'array':
        if (property.items) {
          return `${this.typeScriptType(property.items, schemas)}[]`;
        }
        return 'any[]';
      case 'object':
        if (property.properties) {
          const props = Object.entries(property.properties)
            .map(([key, value]) => {
              const optional = !property.required?.includes(key) ? '?' : '';
              return `  ${key}${optional}: ${this.typeScriptType(value, schemas)};`;
            })
            .join('\n');
          return `{\n${props}\n}`;
        }
        return 'any';
      default:
        return 'any';
    }
  }

  private generateTypes(): string {
    const schemas = this.spec.components?.schemas || this.spec.definitions || {};
    let types = '';

    for (const [name, schema] of Object.entries(schemas)) {
      if (schema.properties) {
        const properties = Object.entries(schema.properties)
          .map(([key, value]) => {
            const optional = !schema.required?.includes(key) ? '?' : '';
            return `  ${key}${optional}: ${this.typeScriptType(value, schemas)};`;
          })
          .join('\n');

        types += `
export interface ${name} {
${properties}
}
`;
      }
    }

    return types;
  }

  private getResponseType(responses: { [key: string]: SwaggerResponse }): string {
    const successResponse = responses['200'] || responses['201'] || responses['default'];
    if (!successResponse) return 'any';

    const schema = successResponse.schema || 
                  successResponse.content?.['application/json']?.schema;
    
    if (!schema) return 'any';

    return this.typeScriptType(schema, this.spec.components?.schemas || this.spec.definitions || {});
  }

  private getRequestBodyType(requestBody: any): string {
    if (!requestBody) return '';

    const schema = requestBody.content?.['application/json']?.schema ||
                  requestBody.content?.['application/x-www-form-urlencoded']?.schema;
    
    if (!schema) return 'any';

    return this.typeScriptType(schema, this.spec.components?.schemas || this.spec.definitions || {});
  }

  private generateApiFunction(path: string, method: string, endpoint: SwaggerEndpoint): string {
    const functionName = endpoint.operationId || 
      `${method}${path.split('/').map(p => p.startsWith('{') ? '' : this.capitalize(p)).join('')}`;
    
    const pathParams = endpoint.parameters?.filter(p => p.in === 'path') || [];
    const queryParams = endpoint.parameters?.filter(p => p.in === 'query') || [];
    const hasRequestBody = !!endpoint.requestBody;

    const responseType = this.getResponseType(endpoint.responses);
    const requestBodyType = hasRequestBody ? this.getRequestBodyType(endpoint.requestBody) : '';

    let params = '';
    let apiCall = '';
    let urlPath = path;

    // Handle path parameters
    if (pathParams.length > 0) {
      pathParams.forEach(param => {
        params += `${param.name}: string, `;
        urlPath = urlPath.replace(`{${param.name}}`, `\${${param.name}}`);
      });
    }

    // Handle request body
    if (hasRequestBody) {
      params += `data: ${requestBodyType}, `;
    }

    // Handle query parameters
    if (queryParams.length > 0) {
      params += `params?: { ${queryParams.map(p => `${p.name}?: ${p.type || 'any'}`).join('; ')} }, `;
    }

    params = params.replace(/, $/, '');

    // Generate API call
    switch (method.toLowerCase()) {
      case 'get':
        apiCall = queryParams.length > 0 
          ? `api.get<${responseType}>(\`${urlPath}\`, { params })`
          : `api.get<${responseType}>(\`${urlPath}\`)`;
        break;
      case 'post':
        if (hasRequestBody) {
          apiCall = queryParams.length > 0
            ? `api.post<${responseType}>(\`${urlPath}\`, data, { params })`
            : `api.post<${responseType}>(\`${urlPath}\`, data)`;
        } else {
          apiCall = `api.post<${responseType}>(\`${urlPath}\`)`;
        }
        break;
      case 'put':
        if (hasRequestBody) {
          apiCall = `api.put<${responseType}>(\`${urlPath}\`, data)`;
        } else {
          apiCall = `api.put<${responseType}>(\`${urlPath}\`)`;
        }
        break;
      case 'patch':
        if (hasRequestBody) {
          apiCall = `api.patch<${responseType}>(\`${urlPath}\`, data)`;
        } else {
          apiCall = `api.patch<${responseType}>(\`${urlPath}\`)`;
        }
        break;
      case 'delete':
        if (hasRequestBody) {
          apiCall = `api.delete<${responseType}>(\`${urlPath}\`, { data })`;
        } else {
          apiCall = `api.delete<${responseType}>(\`${urlPath}\`)`;
        }
        break;
    }

    return `
export const ${this.toCamelCase(functionName)} = async (${params}) => {
  const { data } = await ${apiCall};
  return data;
};`;
  }

  private generateQueryHook(path: string, method: string, endpoint: SwaggerEndpoint): string {
    const functionName = endpoint.operationId || 
      `${method}${path.split('/').map(p => p.startsWith('{') ? '' : this.capitalize(p)).join('')}`;
    
    const hookName = `use${this.toPascalCase(functionName)}`;
    const apiFunctionName = this.toCamelCase(functionName);
    
    const pathParams = endpoint.parameters?.filter(p => p.in === 'path') || [];
    const queryParams = endpoint.parameters?.filter(p => p.in === 'query') || [];

    let params = '';
    let queryKey = `['${functionName.toLowerCase()}']`;
    let enabled = '';

    if (pathParams.length > 0) {
      params = pathParams.map(p => `${p.name}: string`).join(', ');
      queryKey = `['${functionName.toLowerCase()}', ${pathParams.map(p => p.name).join(', ')}]`;
      enabled = `enabled: !!(${pathParams.map(p => p.name).join(' && ')}),`;
    }

    if (queryParams.length > 0) {
      const queryParamType = `{ ${queryParams.map(p => `${p.name}?: ${p.type || 'any'}`).join('; ')} }`;
      params = params ? `${params}, params?: ${queryParamType}` : `params?: ${queryParamType}`;
      queryKey = pathParams.length > 0 
        ? `['${functionName.toLowerCase()}', ${pathParams.map(p => p.name).join(', ')}, params]`
        : `['${functionName.toLowerCase()}', params]`;
    }

    const queryFnParams = pathParams.length > 0 
      ? `() => ${apiFunctionName}(${pathParams.map(p => p.name).join(', ')}${queryParams.length > 0 ? ', params' : ''})`
      : queryParams.length > 0 
        ? `() => ${apiFunctionName}(params)`
        : apiFunctionName;

    return `
export const ${hookName} = (${params}) => {
  return useQuery({
    queryKey: ${queryKey},
    queryFn: ${queryFnParams},
    ${enabled}
  });
};`;
  }

  private generateMutationHook(path: string, method: string, endpoint: SwaggerEndpoint): string {
    const functionName = endpoint.operationId || 
      `${method}${path.split('/').map(p => p.startsWith('{') ? '' : this.capitalize(p)).join('')}`;
    
    const hookName = `use${this.toPascalCase(functionName)}`;
    const apiFunctionName = this.toCamelCase(functionName);
    
    const pathParams = endpoint.parameters?.filter(p => p.in === 'path') || [];
    const hasRequestBody = !!endpoint.requestBody;
    const requestBodyType = hasRequestBody ? this.getRequestBodyType(endpoint.requestBody) : '';

    let mutationFnType = '';
    
    if (pathParams.length > 0 && hasRequestBody) {
      mutationFnType = `(data: ${requestBodyType} & { ${pathParams.map(p => `${p.name}: string`).join('; ')} })`;
    } else if (pathParams.length > 0) {
      mutationFnType = `(data: { ${pathParams.map(p => `${p.name}: string`).join('; ')} })`;
    } else if (hasRequestBody) {
      mutationFnType = `(data: ${requestBodyType})`;
    } else {
      mutationFnType = '()';
    }

    let mutationFnCall = '';
    if (pathParams.length > 0 && hasRequestBody) {
      const pathParamsList = pathParams.map(p => `data.${p.name}`).join(', ');
      mutationFnCall = `${apiFunctionName}(${pathParamsList}, data)`;
    } else if (pathParams.length > 0) {
      const pathParamsList = pathParams.map(p => `data.${p.name}`).join(', ');
      mutationFnCall = `${apiFunctionName}(${pathParamsList})`;
    } else if (hasRequestBody) {
      mutationFnCall = `${apiFunctionName}(data)`;
    } else {
      mutationFnCall = `${apiFunctionName}()`;
    }

    return `
export const ${hookName} = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: ${mutationFnType} => ${mutationFnCall},
    onSuccess: () => {
      // Invalidate related queries here
      queryClient.invalidateQueries({ queryKey: ['${functionName.toLowerCase()}'] });
    },
  });
};`;
  }

  private generateFiles(): void {
    // Create output directory
    fs.ensureDirSync(this.outputDir);

    // Generate types
    const types = this.generateTypes();

    // Generate API functions and hooks
    let apiImports = `import api from "#lib/notables/axios-config"\n`;
    let hookImports = `import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"\n`;
    
    let apiFunctions = '';
    let queryHooks = '';
    let mutationHooks = '';

    for (const [path, methods] of Object.entries(this.spec.paths)) {
      for (const [method, endpoint] of Object.entries(methods)) {
        apiFunctions += this.generateApiFunction(path, method, endpoint);

        if (method.toLowerCase() === 'get') {
          queryHooks += this.generateQueryHook(path, method, endpoint);
        } else {
          mutationHooks += this.generateMutationHook(path, method, endpoint);
        }
      }
    }

    // Write types file
    fs.writeFileSync(
      path.join(this.outputDir, 'types.ts'),
      types
    );

    // Write API file
    fs.writeFileSync(
      path.join(this.outputDir, 'api.ts'),
      `${apiImports}
import type {
  // Add your generated types here
} from "./types"

${apiFunctions}
`
    );

    // Write hooks file
    fs.writeFileSync(
      path.join(this.outputDir, 'hooks.ts'),
      `${hookImports}
import {
  // Add your generated API functions here
} from "./api"

// Query Hooks
${queryHooks}

// Mutation Hooks
${mutationHooks}
`
    );

    console.log(`✅ Files generated successfully in ${this.outputDir}`);
  }

  async generate(): Promise<void> {
    this.generateFiles();
  }
}

async function loadSwaggerSpec(input: string): Promise<SwaggerSpec> {
  let content: string;

  if (input.startsWith('http://') || input.startsWith('https://')) {
    // Load from URL
    console.log(`📥 Fetching Swagger spec from ${input}...`);
    const response = await axios.get(input);
    content = typeof response.data === 'string' ? response.data : JSON.stringify(response.data);
  } else {
    // Load from file
    console.log(`📁 Loading Swagger spec from ${input}...`);
    content = await fs.readFile(input, 'utf-8');
  }

  // Parse JSON or YAML
  try {
    return JSON.parse(content);
  } catch {
    return yaml.load(content) as SwaggerSpec;
  }
}

const program = new Command();

program
  .name('swagger-to-tanstack')
  .description('Generate TanStack Query hooks from Swagger/OpenAPI specification')
  .version('1.0.0');

program
  .command('generate')
  .description('Generate API functions and TanStack Query hooks')
  .requiredOption('-i, --input <input>', 'Swagger spec file path or URL')
  .option('-o, --output <output>', 'Output directory', './generated')
  .option('-b, --baseUrl <baseUrl>', 'API base URL', '')
  .action(async (options) => {
    try {
      const spec = await loadSwaggerSpec(options.input);
      const generator = new SwaggerToTanStackGenerator(spec, options.baseUrl, options.output);
      await generator.generate();
    } catch (error) {
      //@ts-ignore
      console.error('❌ Error:', error.message);
      process.exit(1);
    }
  });

program.parse();
