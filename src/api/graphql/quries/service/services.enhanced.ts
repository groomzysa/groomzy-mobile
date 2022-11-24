import { api } from "./services.generated";

export const enhancedServicesApi = api.enhanceEndpoints({
  addTagTypes: ["Services"],
  endpoints: {
    services: { providesTags: ["Services"] },
  },
});

export const { useLazyServicesQuery, useServicesQuery } = enhancedServicesApi;
