
export interface RegisterDto {
  firstName: string;
  lastName: string;
  birthDate: string;
  birthPlace: string;
  nationality: string;
  city: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  idType: string;
  idNumber: string;
  acceptTerms: boolean;
  acceptDataPolicy: boolean;
  role?: 'user' | 'admin' | 'moderator';
}

export interface LoginDto {
  email: string;
  password: string;
}

export interface VerifyOtpDto {
  code: string;
  userId: string;
}

export interface LoginOtpDto {
  email: string;
  otpCode: string;
}

export interface ForgotPasswordDto {
  email: string;
}

export interface ResetPasswordDto {
  token: string;
  newPassword: string;
}

export interface ChangePasswordDto {
  currentPassword: string;
  newPassword: string;
}

export interface UpdateUserDto {
  firstName?: string;
  lastName?: string;
  birthDate?: string;
  birthPlace?: string;
  nationality?: string;
  city?: string;
  email?: string;
  phone?: string;
}

export interface UpdateDocumentDto {
  documentType?: 'identity_card' | 'passport' | 'driving_license' | 'birth_certificate' | 'diploma' | 'contract' | 'other';
  description?: string;
}

export interface UploadDocumentDto {
  documentType: 'identity_card' | 'passport' | 'driving_license' | 'birth_certificate' | 'diploma' | 'contract' | 'other';
  description?: string;
}

export interface CreatePlaceDto {
  title: string;
  description: string;
  details: string;
  gallery?: string[];
  reviews?: string[];
  phone?: string;
  website?: string;
  address: string;
  features?: string[];
  specialties?: string[];
  openingHours?: string;
  poster?: string;
  type: 'restaurant' | 'landmark' | 'activity' | 'hotel';
}

export interface UpdatePlaceDto {
  title?: string;
  description?: string;
  details?: string;
  gallery?: string[];
  reviews?: string[];
  phone?: string;
  website?: string;
  address?: string;
  features?: string[];
  specialties?: string[];
  openingHours?: string;
  poster?: string;
  type?: 'restaurant' | 'landmark' | 'activity' | 'hotel';
}

export interface CreateAnnouncementDto {
  title: string;
  description: string;
  details: string;
  gallery?: string[];
  date: string;
  type: 'news' | 'press_release' | 'announcement' | 'communique';
  poster?: string;
  comments?: string[];
  tags?: string[];
}

export interface UpdateAnnouncementDto {
  title?: string;
  description?: string;
  details?: string;
  gallery?: string[];
  date?: string;
  type?: 'news' | 'press_release' | 'announcement' | 'communique';
  poster?: string;
  comments?: string[];
  tags?: string[];
}

export interface AddCommentDto {
  comment: string;
}

export interface CreateRdvRequestDto {
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
  profession: string;
  institution: string;
  nationalId: string;
  meetingTarget: string;
  otherMeetingTarget?: string;
  subject: string;
  otherSubject?: string;
  preferredSlot1: string;
  preferredSlot2: string;
  preferredSlot3: string;
  meetingType: string;
  certifyAccuracy: boolean;
  authorizeContact: boolean;
}

export interface CreatePartenariatRequestDto {
  nom: string;
  prenom: string;
  email: string;
  organizationName: string;
  organizationType: string;
  otherOrganizationType?: string;
  activitySector: string;
  otherActivitySector?: string;
  originCountry: string;
  originCity: string;
  creationYear: number;
  website?: string;
  contactName: string;
  contactFunction: string;
  contactPhone: string;
  contactEmail: string;
  partnershipNature: string;
  otherPartnershipNature?: string;
  concernedService: string;
  proposalDescription: string;
  mairieObjectives: string;
  structureObjectives: string;
  partnershipDuration: string;
  startDate: string;
  certifyAccuracy: boolean;
  authorizeContact: boolean;
  acknowledgeNoValidation: boolean;
}

export interface ConjointDto {
  nom: string;
  prenom: string;
  dob: string;
  pob: string;
  nationality: string;
  profession: string;
  address: string;
  phone: string;
  email: string;
  idNumber: string;
  maritalStatus: string;
}

export interface CreateMariageRequestDto {
  conjoint1: ConjointDto;
  conjoint2: ConjointDto;
  marriageType: string;
  guestEstimate: number;
  celebrationLanguage: string;
  otherCelebrationLanguage?: string;
  date1: string;
  time1: string;
  date2: string;
  time2: string;
  date3: string;
  time3: string;
  reserveRoom: boolean;
  roomType?: string;
  photoSpace: boolean;
  onlinePayment: boolean;
  certifyAccuracy: boolean;
  authorizeContact: boolean;
}

export interface CreateTreatmentDto {
  demandeId: string;
  agentNom: string;
  agentPrenom: string;
  agentEmail: string;
  agentService?: string;
  commentairesInternes?: string;
  messageAgent?: string;
  dateEcheance?: string;
  notifyByEmail?: boolean;
  documentsRequis?: string[];
  tempsEstime?: number;
}

export interface UpdateTreatmentDto {
  etat?: string;
  resultat?: string;
  etapeWorkflow?: string;
  commentairesInternes?: string;
  commentairesPublics?: string;
  messageAgent?: string;
  dateEcheance?: string;
  notifyByEmail?: boolean;
  notifyBySms?: boolean;
  documentsRequis?: string[];
  tempsEstime?: number;
}

export interface CreateNotificationDto {
  userId: string;
  message: string;
  type: 'info' | 'warning' | 'success' | 'error' | 'document';
  serviceRequestId?: string;
}

export interface CreateServiceDto {
  type: string;
  title: string;
  description: string;
  icon?: string;
  category?: string;
  isActive?: boolean;
  requiredDocuments?: string[];
  formFields?: string[];
  workflow?: any;
}

export interface UpdateServiceDto {
  type?: string;
  title?: string;
  description?: string;
  icon?: string;
  category?: string;
  isActive?: boolean;
  requiredDocuments?: string[];
  formFields?: string[];
  workflow?: any;
}

export interface EmergencyContactDto {
  name: string;
  phone: string;
  service: string;
  available24h: boolean;
}

export interface ImportantLinkDto {
  title: string;
  url: string;
  description: string;
  icon?: string;
}

export interface CreateSiteSettingsDto {
  siteName?: string;
  logo?: string;
  favicon?: string;
  primaryColor?: string;
  secondaryColor?: string;
  phone?: string;
  email?: string;
  address?: string;
  city?: string;
  country?: string;
  postalCode?: string;
  latitude?: number;
  longitude?: number;
  website?: string;
  facebook?: string;
  twitter?: string;
  instagram?: string;
  linkedin?: string;
  youtube?: string;
  description?: string;
  welcomeMessage?: string;
  footerText?: string;
  businessHours?: any;
  defaultLanguage?: string;
  supportedLanguages?: string[];
  timezone?: string;
  currency?: string;
  allowRegistration?: boolean;
  requireEmailVerification?: boolean;
  maintenanceMode?: boolean;
  maintenanceMessage?: string;
  emergencyContacts?: EmergencyContactDto[];
  importantLinks?: ImportantLinkDto[];
}

export interface UpdateSiteSettingsDto {

}
