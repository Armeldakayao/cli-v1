import api from "#lib/notables/axios-config"

import type {
  // Add your generated types here
} from "./types"


export const searchControllerGlobalSearch = async (params?: { query?: any; type?: any }) => {
  const { data } = await api.get<any>(`/search`, { params });
  return data;
};
export const authControllerRegister = async (data: RegisterDto) => {
  const { data } = await api.post<any>(`/auth/register`, data);
  return data;
};
export const authControllerLogin = async (data: LoginDto) => {
  const { data } = await api.post<any>(`/auth/login`, data);
  return data;
};
export const authControllerVerifyOtp = async (data: VerifyOtpDto) => {
  const { data } = await api.post<any>(`/auth/verify-otp`, data);
  return data;
};
export const authControllerLoginWithOtp = async (data: LoginOtpDto) => {
  const { data } = await api.post<any>(`/auth/login-with-otp`, data);
  return data;
};
export const authControllerResendOtp = async () => {
  const { data } = await api.post<any>(`/auth/resend-otp`);
  return data;
};
export const authControllerForgotPassword = async (data: ForgotPasswordDto) => {
  const { data } = await api.post<any>(`/auth/forgot-password`, data);
  return data;
};
export const authControllerResetPassword = async (data: ResetPasswordDto) => {
  const { data } = await api.post<any>(`/auth/reset-password`, data);
  return data;
};
export const authControllerChangePassword = async (data: ChangePasswordDto) => {
  const { data } = await api.patch<any>(`/auth/change-password`, data);
  return data;
};
export const usersControllerFindAll = async (params?: { page?: any; limit?: any }) => {
  const { data } = await api.get<any>(`/users`, { params });
  return data;
};
export const usersControllerGetProfile = async () => {
  const { data } = await api.get<any>(`/users/profile`);
  return data;
};
export const usersControllerUpdateProfile = async (data: UpdateUserDto) => {
  const { data } = await api.patch<any>(`/users/profile`, data);
  return data;
};
export const usersControllerUploadProfilePhoto = async (data: any) => {
  const { data } = await api.post<any>(`/users/profile/photo`, data);
  return data;
};
export const usersControllerUploadDocument = async (data: any) => {
  const { data } = await api.post<any>(`/users/documents`, data);
  return data;
};
export const usersControllerGetUserDocuments = async () => {
  const { data } = await api.get<any>(`/users/documents`);
  return data;
};
export const usersControllerGetAllUserFiles = async (params?: { includeInactive?: any }) => {
  const { data } = await api.get<any>(`/users/files`, { params });
  return data;
};
export const usersControllerGetDocument = async (documentId: string) => {
  const { data } = await api.get<any>(`/users/documents/${documentId}`);
  return data;
};
export const usersControllerUpdateDocument = async (documentId: string, data: UpdateDocumentDto) => {
  const { data } = await api.patch<any>(`/users/documents/${documentId}`, data);
  return data;
};
export const usersControllerDeleteDocument = async (documentId: string) => {
  const { data } = await api.delete<any>(`/users/documents/${documentId}`);
  return data;
};
export const usersControllerFindOne = async (id: string) => {
  const { data } = await api.get<any>(`/users/${id}`);
  return data;
};
export const usersControllerUpdate = async (id: string, data: UpdateUserDto) => {
  const { data } = await api.patch<any>(`/users/${id}`, data);
  return data;
};
export const usersControllerRemove = async (id: string) => {
  const { data } = await api.delete<any>(`/users/${id}`);
  return data;
};
export const usersControllerGetUserFiles = async (id: string, params?: { includeInactive?: any }) => {
  const { data } = await api.get<any>(`/users/${id}/files`, { params });
  return data;
};
export const usersControllerUploadDocumentForUser = async (id: string, data: any) => {
  const { data } = await api.post<any>(`/users/${id}/documents`, data);
  return data;
};
export const placesControllerCreate = async (data: CreatePlaceDto) => {
  const { data } = await api.post<any>(`/places`, data);
  return data;
};
export const placesControllerFindAll = async (params?: { page?: any; limit?: any; type?: any; search?: any }) => {
  const { data } = await api.get<any>(`/places`, { params });
  return data;
};
export const placesControllerFindRestaurants = async (params?: { page?: any; limit?: any }) => {
  const { data } = await api.get<any>(`/places/restaurants`, { params });
  return data;
};
export const placesControllerFindLandmarks = async (params?: { page?: any; limit?: any }) => {
  const { data } = await api.get<any>(`/places/landmarks`, { params });
  return data;
};
export const placesControllerFindActivities = async (params?: { page?: any; limit?: any }) => {
  const { data } = await api.get<any>(`/places/activities`, { params });
  return data;
};
export const placesControllerFindHotels = async (params?: { page?: any; limit?: any }) => {
  const { data } = await api.get<any>(`/places/hotels`, { params });
  return data;
};
export const placesControllerFindOne = async (id: string) => {
  const { data } = await api.get<any>(`/places/${id}`);
  return data;
};
export const placesControllerUpdate = async (id: string, data: UpdatePlaceDto) => {
  const { data } = await api.patch<any>(`/places/${id}`, data);
  return data;
};
export const placesControllerRemove = async (id: string) => {
  const { data } = await api.delete<any>(`/places/${id}`);
  return data;
};
export const announcementsControllerCreate = async (data: CreateAnnouncementDto) => {
  const { data } = await api.post<any>(`/communiques`, data);
  return data;
};
export const announcementsControllerFindAll = async (params?: { page?: any; limit?: any; type?: any; search?: any; tags?: any }) => {
  const { data } = await api.get<any>(`/communiques`, { params });
  return data;
};
export const announcementsControllerUpdate = async (id: string, data: UpdateAnnouncementDto) => {
  const { data } = await api.patch<any>(`/communiques/${id}`, data);
  return data;
};
export const announcementsControllerRemove = async (id: string) => {
  const { data } = await api.delete<any>(`/communiques/${id}`);
  return data;
};
export const announcementsControllerFindOne = async (id: string) => {
  const { data } = await api.get<any>(`/communiques/${id}`);
  return data;
};
export const announcementsControllerDeactivate = async (id: string) => {
  const { data } = await api.patch<any>(`/communiques/${id}/deactivate`);
  return data;
};
export const announcementsControllerActivate = async (id: string) => {
  const { data } = await api.patch<any>(`/communiques/${id}/activate`);
  return data;
};
export const announcementsControllerGetStats = async () => {
  const { data } = await api.get<any>(`/communiques/stats`);
  return data;
};
export const announcementsControllerSearch = async (params?: { q?: any; page?: any; limit?: any }) => {
  const { data } = await api.get<any>(`/communiques/search`, { params });
  return data;
};
export const announcementsControllerFindNews = async (params?: { page?: any; limit?: any }) => {
  const { data } = await api.get<any>(`/communiques/actualites`, { params });
  return data;
};
export const announcementsControllerFindPressReleases = async (params?: { page?: any; limit?: any }) => {
  const { data } = await api.get<any>(`/communiques/communiques-presse`, { params });
  return data;
};
export const announcementsControllerFindCommuniques = async (params?: { page?: any; limit?: any }) => {
  const { data } = await api.get<any>(`/communiques/communiques`, { params });
  return data;
};
export const announcementsControllerFindGeneralAnnouncements = async (params?: { page?: any; limit?: any }) => {
  const { data } = await api.get<any>(`/communiques/annonces`, { params });
  return data;
};
export const announcementsControllerAddComment = async (id: string, data: AddCommentDto) => {
  const { data } = await api.post<any>(`/communiques/${id}/comment`, data);
  return data;
};
export const announcementsControllerGetAllAnnouncements = async (params?: { page?: any; limit?: any; type?: any }) => {
  const { data } = await api.get<any>(`/communiques/annonces/all`, { params });
  return data;
};
export const announcementsControllerGetRecentNews = async () => {
  const { data } = await api.get<any>(`/communiques/actualites/recentes`);
  return data;
};
export const serviceRequestsControllerCreateRdvRequest = async (data: CreateRdvRequestDto) => {
  const { data } = await api.post<any>(`/service-requests/rdv`, data);
  return data;
};
export const serviceRequestsControllerCreatePartenariatRequest = async (data: CreatePartenariatRequestDto) => {
  const { data } = await api.post<any>(`/service-requests/partenariat`, data);
  return data;
};
export const serviceRequestsControllerCreateMariageRequest = async (data: CreateMariageRequestDto) => {
  const { data } = await api.post<any>(`/service-requests/mariage`, data);
  return data;
};
export const serviceRequestsControllerFindAll = async (params?: { agentId?: any; priorite?: any; etat?: any; type?: any; limit?: any; page?: any }) => {
  const { data } = await api.get<any>(`/service-requests`, { params });
  return data;
};
export const serviceRequestsControllerGetUserRequests = async (params?: { etat?: any; type?: any; limit?: any; page?: any }) => {
  const { data } = await api.get<any>(`/service-requests/my-requests`, { params });
  return data;
};
export const serviceRequestsControllerFindByReference = async (reference: string) => {
  const { data } = await api.get<any>(`/service-requests/reference/${reference}`);
  return data;
};
export const serviceRequestsControllerGetStatistics = async (params?: { agentId?: any; type?: any; dateFin?: any; dateDebut?: any }) => {
  const { data } = await api.get<any>(`/service-requests/statistics`, { params });
  return data;
};
export const serviceRequestsControllerGetAgentWorkload = async (agentId: string) => {
  const { data } = await api.get<any>(`/service-requests/agent-workload/${agentId}`);
  return data;
};
export const serviceRequestsControllerFindOne = async (id: string) => {
  const { data } = await api.get<any>(`/service-requests/${id}`);
  return data;
};
export const serviceRequestsControllerCreateTreatment = async (data: CreateTreatmentDto) => {
  const { data } = await api.post<any>(`/service-requests/treatments`, data);
  return data;
};
export const serviceRequestsControllerUpdateTreatment = async (id: string, data: UpdateTreatmentDto) => {
  const { data } = await api.patch<any>(`/service-requests/treatments/${id}`, data);
  return data;
};
export const serviceRequestsControllerFinalizeTreatment = async (id: string) => {
  const { data } = await api.post<any>(`/service-requests/treatments/${id}/finalize`);
  return data;
};
export const serviceRequestsControllerAddDocuments = async (id: string) => {
  const { data } = await api.post<any>(`/service-requests/${id}/documents`);
  return data;
};
export const serviceRequestsControllerAddTreatmentDocuments = async (id: string) => {
  const { data } = await api.post<any>(`/service-requests/treatments/${id}/documents`);
  return data;
};
export const notificationsControllerCreate = async (data: CreateNotificationDto) => {
  const { data } = await api.post<any>(`/notifications`, data);
  return data;
};
export const notificationsControllerFindMine = async (params?: { page?: any; limit?: any }) => {
  const { data } = await api.get<any>(`/notifications`, { params });
  return data;
};
export const notificationsControllerGetUnreadCount = async () => {
  const { data } = await api.get<any>(`/notifications/unread-count`);
  return data;
};
export const notificationsControllerMarkAsRead = async (id: string) => {
  const { data } = await api.patch<any>(`/notifications/${id}/read`);
  return data;
};
export const notificationsControllerMarkAllAsRead = async () => {
  const { data } = await api.patch<any>(`/notifications/read-all`);
  return data;
};
export const notificationsControllerRemove = async (id: string) => {
  const { data } = await api.delete<any>(`/notifications/${id}`);
  return data;
};
export const uploadControllerUploadFile = async (data: any, params?: { folder?: any }) => {
  const { data } = await api.post<any>(`/upload/single`, data, { params });
  return data;
};
export const uploadControllerUploadFiles = async (data: any, params?: { folder?: any }) => {
  const { data } = await api.post<any>(`/upload/multiple`, data, { params });
  return data;
};
export const uploadControllerUploadAvatar = async (data: any) => {
  const { data } = await api.post<any>(`/upload/avatar`, data);
  return data;
};
export const uploadControllerUploadDocuments = async (data: any) => {
  const { data } = await api.post<any>(`/upload/documents`, data);
  return data;
};
export const servicesControllerCreate = async (data: CreateServiceDto) => {
  const { data } = await api.post<any>(`/services`, data);
  return data;
};
export const servicesControllerFindAll = async (params?: { page?: any; limit?: any; category?: any }) => {
  const { data } = await api.get<any>(`/services`, { params });
  return data;
};
export const servicesControllerFindByCategory = async (category: string, params?: { page?: any; limit?: any }) => {
  const { data } = await api.get<any>(`/services/category/${category}`, { params });
  return data;
};
export const servicesControllerFindOne = async (id: string) => {
  const { data } = await api.get<any>(`/services/${id}`);
  return data;
};
export const servicesControllerUpdate = async (id: string, data: UpdateServiceDto) => {
  const { data } = await api.patch<any>(`/services/${id}`, data);
  return data;
};
export const servicesControllerRemove = async (id: string) => {
  const { data } = await api.delete<any>(`/services/${id}`);
  return data;
};
export const siteSettingsControllerGetPublicSettings = async () => {
  const { data } = await api.get<any>(`/site-settings/public`);
  return data;
};
export const siteSettingsControllerGetCurrent = async () => {
  const { data } = await api.get<any>(`/site-settings/current`);
  return data;
};
export const siteSettingsControllerUpdateCurrent = async (data: UpdateSiteSettingsDto) => {
  const { data } = await api.patch<any>(`/site-settings/current`, data);
  return data;
};
export const siteSettingsControllerCreate = async (data: CreateSiteSettingsDto) => {
  const { data } = await api.post<any>(`/site-settings`, data);
  return data;
};
export const siteSettingsControllerFindAll = async () => {
  const { data } = await api.get<any>(`/site-settings`);
  return data;
};
export const siteSettingsControllerFindOne = async (id: string) => {
  const { data } = await api.get<any>(`/site-settings/${id}`);
  return data;
};
export const siteSettingsControllerUpdate = async (id: string, data: UpdateSiteSettingsDto) => {
  const { data } = await api.patch<any>(`/site-settings/${id}`, data);
  return data;
};
export const siteSettingsControllerRemove = async (id: string) => {
  const { data } = await api.delete<any>(`/site-settings/${id}`);
  return data;
};
