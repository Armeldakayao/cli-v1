import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"

import {
  // Add your generated API functions here
} from "./api"

// Query Hooks

export const useSearchControllerGlobalSearch = (params?: { query?: any; type?: any }) => {
  return useQuery({
    queryKey: ['searchcontroller_globalsearch', params],
    queryFn: () => searchControllerGlobalSearch(params),
    
  });
};
export const useUsersControllerFindAll = (params?: { page?: any; limit?: any }) => {
  return useQuery({
    queryKey: ['userscontroller_findall', params],
    queryFn: () => usersControllerFindAll(params),
    
  });
};
export const useUsersControllerGetProfile = () => {
  return useQuery({
    queryKey: ['userscontroller_getprofile'],
    queryFn: usersControllerGetProfile,
    
  });
};
export const useUsersControllerGetUserDocuments = () => {
  return useQuery({
    queryKey: ['userscontroller_getuserdocuments'],
    queryFn: usersControllerGetUserDocuments,
    
  });
};
export const useUsersControllerGetAllUserFiles = (params?: { includeInactive?: any }) => {
  return useQuery({
    queryKey: ['userscontroller_getalluserfiles', params],
    queryFn: () => usersControllerGetAllUserFiles(params),
    
  });
};
export const useUsersControllerGetDocument = (documentId: string) => {
  return useQuery({
    queryKey: ['userscontroller_getdocument', documentId],
    queryFn: () => usersControllerGetDocument(documentId),
    enabled: !!(documentId),
  });
};
export const useUsersControllerFindOne = (id: string) => {
  return useQuery({
    queryKey: ['userscontroller_findone', id],
    queryFn: () => usersControllerFindOne(id),
    enabled: !!(id),
  });
};
export const useUsersControllerGetUserFiles = (id: string, params?: { includeInactive?: any }) => {
  return useQuery({
    queryKey: ['userscontroller_getuserfiles', id, params],
    queryFn: () => usersControllerGetUserFiles(id, params),
    enabled: !!(id),
  });
};
export const usePlacesControllerFindAll = (params?: { page?: any; limit?: any; type?: any; search?: any }) => {
  return useQuery({
    queryKey: ['placescontroller_findall', params],
    queryFn: () => placesControllerFindAll(params),
    
  });
};
export const usePlacesControllerFindRestaurants = (params?: { page?: any; limit?: any }) => {
  return useQuery({
    queryKey: ['placescontroller_findrestaurants', params],
    queryFn: () => placesControllerFindRestaurants(params),
    
  });
};
export const usePlacesControllerFindLandmarks = (params?: { page?: any; limit?: any }) => {
  return useQuery({
    queryKey: ['placescontroller_findlandmarks', params],
    queryFn: () => placesControllerFindLandmarks(params),
    
  });
};
export const usePlacesControllerFindActivities = (params?: { page?: any; limit?: any }) => {
  return useQuery({
    queryKey: ['placescontroller_findactivities', params],
    queryFn: () => placesControllerFindActivities(params),
    
  });
};
export const usePlacesControllerFindHotels = (params?: { page?: any; limit?: any }) => {
  return useQuery({
    queryKey: ['placescontroller_findhotels', params],
    queryFn: () => placesControllerFindHotels(params),
    
  });
};
export const usePlacesControllerFindOne = (id: string) => {
  return useQuery({
    queryKey: ['placescontroller_findone', id],
    queryFn: () => placesControllerFindOne(id),
    enabled: !!(id),
  });
};
export const useAnnouncementsControllerFindAll = (params?: { page?: any; limit?: any; type?: any; search?: any; tags?: any }) => {
  return useQuery({
    queryKey: ['announcementscontroller_findall', params],
    queryFn: () => announcementsControllerFindAll(params),
    
  });
};
export const useAnnouncementsControllerFindOne = (id: string) => {
  return useQuery({
    queryKey: ['announcementscontroller_findone', id],
    queryFn: () => announcementsControllerFindOne(id),
    enabled: !!(id),
  });
};
export const useAnnouncementsControllerGetStats = () => {
  return useQuery({
    queryKey: ['announcementscontroller_getstats'],
    queryFn: announcementsControllerGetStats,
    
  });
};
export const useAnnouncementsControllerSearch = (params?: { q?: any; page?: any; limit?: any }) => {
  return useQuery({
    queryKey: ['announcementscontroller_search', params],
    queryFn: () => announcementsControllerSearch(params),
    
  });
};
export const useAnnouncementsControllerFindNews = (params?: { page?: any; limit?: any }) => {
  return useQuery({
    queryKey: ['announcementscontroller_findnews', params],
    queryFn: () => announcementsControllerFindNews(params),
    
  });
};
export const useAnnouncementsControllerFindPressReleases = (params?: { page?: any; limit?: any }) => {
  return useQuery({
    queryKey: ['announcementscontroller_findpressreleases', params],
    queryFn: () => announcementsControllerFindPressReleases(params),
    
  });
};
export const useAnnouncementsControllerFindCommuniques = (params?: { page?: any; limit?: any }) => {
  return useQuery({
    queryKey: ['announcementscontroller_findcommuniques', params],
    queryFn: () => announcementsControllerFindCommuniques(params),
    
  });
};
export const useAnnouncementsControllerFindGeneralAnnouncements = (params?: { page?: any; limit?: any }) => {
  return useQuery({
    queryKey: ['announcementscontroller_findgeneralannouncements', params],
    queryFn: () => announcementsControllerFindGeneralAnnouncements(params),
    
  });
};
export const useAnnouncementsControllerGetAllAnnouncements = (params?: { page?: any; limit?: any; type?: any }) => {
  return useQuery({
    queryKey: ['announcementscontroller_getallannouncements', params],
    queryFn: () => announcementsControllerGetAllAnnouncements(params),
    
  });
};
export const useAnnouncementsControllerGetRecentNews = () => {
  return useQuery({
    queryKey: ['announcementscontroller_getrecentnews'],
    queryFn: announcementsControllerGetRecentNews,
    
  });
};
export const useServiceRequestsControllerFindAll = (params?: { agentId?: any; priorite?: any; etat?: any; type?: any; limit?: any; page?: any }) => {
  return useQuery({
    queryKey: ['servicerequestscontroller_findall', params],
    queryFn: () => serviceRequestsControllerFindAll(params),
    
  });
};
export const useServiceRequestsControllerGetUserRequests = (params?: { etat?: any; type?: any; limit?: any; page?: any }) => {
  return useQuery({
    queryKey: ['servicerequestscontroller_getuserrequests', params],
    queryFn: () => serviceRequestsControllerGetUserRequests(params),
    
  });
};
export const useServiceRequestsControllerFindByReference = (reference: string) => {
  return useQuery({
    queryKey: ['servicerequestscontroller_findbyreference', reference],
    queryFn: () => serviceRequestsControllerFindByReference(reference),
    enabled: !!(reference),
  });
};
export const useServiceRequestsControllerGetStatistics = (params?: { agentId?: any; type?: any; dateFin?: any; dateDebut?: any }) => {
  return useQuery({
    queryKey: ['servicerequestscontroller_getstatistics', params],
    queryFn: () => serviceRequestsControllerGetStatistics(params),
    
  });
};
export const useServiceRequestsControllerGetAgentWorkload = (agentId: string) => {
  return useQuery({
    queryKey: ['servicerequestscontroller_getagentworkload', agentId],
    queryFn: () => serviceRequestsControllerGetAgentWorkload(agentId),
    enabled: !!(agentId),
  });
};
export const useServiceRequestsControllerFindOne = (id: string) => {
  return useQuery({
    queryKey: ['servicerequestscontroller_findone', id],
    queryFn: () => serviceRequestsControllerFindOne(id),
    enabled: !!(id),
  });
};
export const useNotificationsControllerFindMine = (params?: { page?: any; limit?: any }) => {
  return useQuery({
    queryKey: ['notificationscontroller_findmine', params],
    queryFn: () => notificationsControllerFindMine(params),
    
  });
};
export const useNotificationsControllerGetUnreadCount = () => {
  return useQuery({
    queryKey: ['notificationscontroller_getunreadcount'],
    queryFn: notificationsControllerGetUnreadCount,
    
  });
};
export const useServicesControllerFindAll = (params?: { page?: any; limit?: any; category?: any }) => {
  return useQuery({
    queryKey: ['servicescontroller_findall', params],
    queryFn: () => servicesControllerFindAll(params),
    
  });
};
export const useServicesControllerFindByCategory = (category: string, params?: { page?: any; limit?: any }) => {
  return useQuery({
    queryKey: ['servicescontroller_findbycategory', category, params],
    queryFn: () => servicesControllerFindByCategory(category, params),
    enabled: !!(category),
  });
};
export const useServicesControllerFindOne = (id: string) => {
  return useQuery({
    queryKey: ['servicescontroller_findone', id],
    queryFn: () => servicesControllerFindOne(id),
    enabled: !!(id),
  });
};
export const useSiteSettingsControllerGetPublicSettings = () => {
  return useQuery({
    queryKey: ['sitesettingscontroller_getpublicsettings'],
    queryFn: siteSettingsControllerGetPublicSettings,
    
  });
};
export const useSiteSettingsControllerGetCurrent = () => {
  return useQuery({
    queryKey: ['sitesettingscontroller_getcurrent'],
    queryFn: siteSettingsControllerGetCurrent,
    
  });
};
export const useSiteSettingsControllerFindAll = () => {
  return useQuery({
    queryKey: ['sitesettingscontroller_findall'],
    queryFn: siteSettingsControllerFindAll,
    
  });
};
export const useSiteSettingsControllerFindOne = (id: string) => {
  return useQuery({
    queryKey: ['sitesettingscontroller_findone', id],
    queryFn: () => siteSettingsControllerFindOne(id),
    enabled: !!(id),
  });
};

// Mutation Hooks

export const useAuthControllerRegister = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (data: RegisterDto) => authControllerRegister(data),
    onSuccess: () => {
      // Invalidate related queries here
      queryClient.invalidateQueries({ queryKey: ['authcontroller_register'] });
    },
  });
};
export const useAuthControllerLogin = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (data: LoginDto) => authControllerLogin(data),
    onSuccess: () => {
      // Invalidate related queries here
      queryClient.invalidateQueries({ queryKey: ['authcontroller_login'] });
    },
  });
};
export const useAuthControllerVerifyOtp = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (data: VerifyOtpDto) => authControllerVerifyOtp(data),
    onSuccess: () => {
      // Invalidate related queries here
      queryClient.invalidateQueries({ queryKey: ['authcontroller_verifyotp'] });
    },
  });
};
export const useAuthControllerLoginWithOtp = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (data: LoginOtpDto) => authControllerLoginWithOtp(data),
    onSuccess: () => {
      // Invalidate related queries here
      queryClient.invalidateQueries({ queryKey: ['authcontroller_loginwithotp'] });
    },
  });
};
export const useAuthControllerResendOtp = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: () => authControllerResendOtp(),
    onSuccess: () => {
      // Invalidate related queries here
      queryClient.invalidateQueries({ queryKey: ['authcontroller_resendotp'] });
    },
  });
};
export const useAuthControllerForgotPassword = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (data: ForgotPasswordDto) => authControllerForgotPassword(data),
    onSuccess: () => {
      // Invalidate related queries here
      queryClient.invalidateQueries({ queryKey: ['authcontroller_forgotpassword'] });
    },
  });
};
export const useAuthControllerResetPassword = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (data: ResetPasswordDto) => authControllerResetPassword(data),
    onSuccess: () => {
      // Invalidate related queries here
      queryClient.invalidateQueries({ queryKey: ['authcontroller_resetpassword'] });
    },
  });
};
export const useAuthControllerChangePassword = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (data: ChangePasswordDto) => authControllerChangePassword(data),
    onSuccess: () => {
      // Invalidate related queries here
      queryClient.invalidateQueries({ queryKey: ['authcontroller_changepassword'] });
    },
  });
};
export const useUsersControllerUpdateProfile = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (data: UpdateUserDto) => usersControllerUpdateProfile(data),
    onSuccess: () => {
      // Invalidate related queries here
      queryClient.invalidateQueries({ queryKey: ['userscontroller_updateprofile'] });
    },
  });
};
export const useUsersControllerUploadProfilePhoto = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (data: any) => usersControllerUploadProfilePhoto(data),
    onSuccess: () => {
      // Invalidate related queries here
      queryClient.invalidateQueries({ queryKey: ['userscontroller_uploadprofilephoto'] });
    },
  });
};
export const useUsersControllerUploadDocument = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (data: any) => usersControllerUploadDocument(data),
    onSuccess: () => {
      // Invalidate related queries here
      queryClient.invalidateQueries({ queryKey: ['userscontroller_uploaddocument'] });
    },
  });
};
export const useUsersControllerUpdateDocument = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (data: UpdateDocumentDto & { documentId: string }) => usersControllerUpdateDocument(data.documentId, data),
    onSuccess: () => {
      // Invalidate related queries here
      queryClient.invalidateQueries({ queryKey: ['userscontroller_updatedocument'] });
    },
  });
};
export const useUsersControllerDeleteDocument = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (data: { documentId: string }) => usersControllerDeleteDocument(data.documentId),
    onSuccess: () => {
      // Invalidate related queries here
      queryClient.invalidateQueries({ queryKey: ['userscontroller_deletedocument'] });
    },
  });
};
export const useUsersControllerUpdate = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (data: UpdateUserDto & { id: string }) => usersControllerUpdate(data.id, data),
    onSuccess: () => {
      // Invalidate related queries here
      queryClient.invalidateQueries({ queryKey: ['userscontroller_update'] });
    },
  });
};
export const useUsersControllerRemove = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (data: { id: string }) => usersControllerRemove(data.id),
    onSuccess: () => {
      // Invalidate related queries here
      queryClient.invalidateQueries({ queryKey: ['userscontroller_remove'] });
    },
  });
};
export const useUsersControllerUploadDocumentForUser = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (data: any & { id: string }) => usersControllerUploadDocumentForUser(data.id, data),
    onSuccess: () => {
      // Invalidate related queries here
      queryClient.invalidateQueries({ queryKey: ['userscontroller_uploaddocumentforuser'] });
    },
  });
};
export const usePlacesControllerCreate = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (data: CreatePlaceDto) => placesControllerCreate(data),
    onSuccess: () => {
      // Invalidate related queries here
      queryClient.invalidateQueries({ queryKey: ['placescontroller_create'] });
    },
  });
};
export const usePlacesControllerUpdate = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (data: UpdatePlaceDto & { id: string }) => placesControllerUpdate(data.id, data),
    onSuccess: () => {
      // Invalidate related queries here
      queryClient.invalidateQueries({ queryKey: ['placescontroller_update'] });
    },
  });
};
export const usePlacesControllerRemove = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (data: { id: string }) => placesControllerRemove(data.id),
    onSuccess: () => {
      // Invalidate related queries here
      queryClient.invalidateQueries({ queryKey: ['placescontroller_remove'] });
    },
  });
};
export const useAnnouncementsControllerCreate = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (data: CreateAnnouncementDto) => announcementsControllerCreate(data),
    onSuccess: () => {
      // Invalidate related queries here
      queryClient.invalidateQueries({ queryKey: ['announcementscontroller_create'] });
    },
  });
};
export const useAnnouncementsControllerUpdate = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (data: UpdateAnnouncementDto & { id: string }) => announcementsControllerUpdate(data.id, data),
    onSuccess: () => {
      // Invalidate related queries here
      queryClient.invalidateQueries({ queryKey: ['announcementscontroller_update'] });
    },
  });
};
export const useAnnouncementsControllerRemove = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (data: { id: string }) => announcementsControllerRemove(data.id),
    onSuccess: () => {
      // Invalidate related queries here
      queryClient.invalidateQueries({ queryKey: ['announcementscontroller_remove'] });
    },
  });
};
export const useAnnouncementsControllerDeactivate = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (data: { id: string }) => announcementsControllerDeactivate(data.id),
    onSuccess: () => {
      // Invalidate related queries here
      queryClient.invalidateQueries({ queryKey: ['announcementscontroller_deactivate'] });
    },
  });
};
export const useAnnouncementsControllerActivate = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (data: { id: string }) => announcementsControllerActivate(data.id),
    onSuccess: () => {
      // Invalidate related queries here
      queryClient.invalidateQueries({ queryKey: ['announcementscontroller_activate'] });
    },
  });
};
export const useAnnouncementsControllerAddComment = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (data: AddCommentDto & { id: string }) => announcementsControllerAddComment(data.id, data),
    onSuccess: () => {
      // Invalidate related queries here
      queryClient.invalidateQueries({ queryKey: ['announcementscontroller_addcomment'] });
    },
  });
};
export const useServiceRequestsControllerCreateRdvRequest = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (data: CreateRdvRequestDto) => serviceRequestsControllerCreateRdvRequest(data),
    onSuccess: () => {
      // Invalidate related queries here
      queryClient.invalidateQueries({ queryKey: ['servicerequestscontroller_createrdvrequest'] });
    },
  });
};
export const useServiceRequestsControllerCreatePartenariatRequest = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (data: CreatePartenariatRequestDto) => serviceRequestsControllerCreatePartenariatRequest(data),
    onSuccess: () => {
      // Invalidate related queries here
      queryClient.invalidateQueries({ queryKey: ['servicerequestscontroller_createpartenariatrequest'] });
    },
  });
};
export const useServiceRequestsControllerCreateMariageRequest = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (data: CreateMariageRequestDto) => serviceRequestsControllerCreateMariageRequest(data),
    onSuccess: () => {
      // Invalidate related queries here
      queryClient.invalidateQueries({ queryKey: ['servicerequestscontroller_createmariagerequest'] });
    },
  });
};
export const useServiceRequestsControllerCreateTreatment = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (data: CreateTreatmentDto) => serviceRequestsControllerCreateTreatment(data),
    onSuccess: () => {
      // Invalidate related queries here
      queryClient.invalidateQueries({ queryKey: ['servicerequestscontroller_createtreatment'] });
    },
  });
};
export const useServiceRequestsControllerUpdateTreatment = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (data: UpdateTreatmentDto & { id: string }) => serviceRequestsControllerUpdateTreatment(data.id, data),
    onSuccess: () => {
      // Invalidate related queries here
      queryClient.invalidateQueries({ queryKey: ['servicerequestscontroller_updatetreatment'] });
    },
  });
};
export const useServiceRequestsControllerFinalizeTreatment = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (data: { id: string }) => serviceRequestsControllerFinalizeTreatment(data.id),
    onSuccess: () => {
      // Invalidate related queries here
      queryClient.invalidateQueries({ queryKey: ['servicerequestscontroller_finalizetreatment'] });
    },
  });
};
export const useServiceRequestsControllerAddDocuments = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (data: { id: string }) => serviceRequestsControllerAddDocuments(data.id),
    onSuccess: () => {
      // Invalidate related queries here
      queryClient.invalidateQueries({ queryKey: ['servicerequestscontroller_adddocuments'] });
    },
  });
};
export const useServiceRequestsControllerAddTreatmentDocuments = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (data: { id: string }) => serviceRequestsControllerAddTreatmentDocuments(data.id),
    onSuccess: () => {
      // Invalidate related queries here
      queryClient.invalidateQueries({ queryKey: ['servicerequestscontroller_addtreatmentdocuments'] });
    },
  });
};
export const useNotificationsControllerCreate = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (data: CreateNotificationDto) => notificationsControllerCreate(data),
    onSuccess: () => {
      // Invalidate related queries here
      queryClient.invalidateQueries({ queryKey: ['notificationscontroller_create'] });
    },
  });
};
export const useNotificationsControllerMarkAsRead = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (data: { id: string }) => notificationsControllerMarkAsRead(data.id),
    onSuccess: () => {
      // Invalidate related queries here
      queryClient.invalidateQueries({ queryKey: ['notificationscontroller_markasread'] });
    },
  });
};
export const useNotificationsControllerMarkAllAsRead = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: () => notificationsControllerMarkAllAsRead(),
    onSuccess: () => {
      // Invalidate related queries here
      queryClient.invalidateQueries({ queryKey: ['notificationscontroller_markallasread'] });
    },
  });
};
export const useNotificationsControllerRemove = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (data: { id: string }) => notificationsControllerRemove(data.id),
    onSuccess: () => {
      // Invalidate related queries here
      queryClient.invalidateQueries({ queryKey: ['notificationscontroller_remove'] });
    },
  });
};
export const useUploadControllerUploadFile = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (data: any) => uploadControllerUploadFile(data),
    onSuccess: () => {
      // Invalidate related queries here
      queryClient.invalidateQueries({ queryKey: ['uploadcontroller_uploadfile'] });
    },
  });
};
export const useUploadControllerUploadFiles = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (data: any) => uploadControllerUploadFiles(data),
    onSuccess: () => {
      // Invalidate related queries here
      queryClient.invalidateQueries({ queryKey: ['uploadcontroller_uploadfiles'] });
    },
  });
};
export const useUploadControllerUploadAvatar = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (data: any) => uploadControllerUploadAvatar(data),
    onSuccess: () => {
      // Invalidate related queries here
      queryClient.invalidateQueries({ queryKey: ['uploadcontroller_uploadavatar'] });
    },
  });
};
export const useUploadControllerUploadDocuments = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (data: any) => uploadControllerUploadDocuments(data),
    onSuccess: () => {
      // Invalidate related queries here
      queryClient.invalidateQueries({ queryKey: ['uploadcontroller_uploaddocuments'] });
    },
  });
};
export const useServicesControllerCreate = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (data: CreateServiceDto) => servicesControllerCreate(data),
    onSuccess: () => {
      // Invalidate related queries here
      queryClient.invalidateQueries({ queryKey: ['servicescontroller_create'] });
    },
  });
};
export const useServicesControllerUpdate = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (data: UpdateServiceDto & { id: string }) => servicesControllerUpdate(data.id, data),
    onSuccess: () => {
      // Invalidate related queries here
      queryClient.invalidateQueries({ queryKey: ['servicescontroller_update'] });
    },
  });
};
export const useServicesControllerRemove = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (data: { id: string }) => servicesControllerRemove(data.id),
    onSuccess: () => {
      // Invalidate related queries here
      queryClient.invalidateQueries({ queryKey: ['servicescontroller_remove'] });
    },
  });
};
export const useSiteSettingsControllerUpdateCurrent = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (data: UpdateSiteSettingsDto) => siteSettingsControllerUpdateCurrent(data),
    onSuccess: () => {
      // Invalidate related queries here
      queryClient.invalidateQueries({ queryKey: ['sitesettingscontroller_updatecurrent'] });
    },
  });
};
export const useSiteSettingsControllerCreate = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (data: CreateSiteSettingsDto) => siteSettingsControllerCreate(data),
    onSuccess: () => {
      // Invalidate related queries here
      queryClient.invalidateQueries({ queryKey: ['sitesettingscontroller_create'] });
    },
  });
};
export const useSiteSettingsControllerUpdate = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (data: UpdateSiteSettingsDto & { id: string }) => siteSettingsControllerUpdate(data.id, data),
    onSuccess: () => {
      // Invalidate related queries here
      queryClient.invalidateQueries({ queryKey: ['sitesettingscontroller_update'] });
    },
  });
};
export const useSiteSettingsControllerRemove = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (data: { id: string }) => siteSettingsControllerRemove(data.id),
    onSuccess: () => {
      // Invalidate related queries here
      queryClient.invalidateQueries({ queryKey: ['sitesettingscontroller_remove'] });
    },
  });
};
