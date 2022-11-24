import { api } from "./addService.generated";

export const enhancedAddServiceApi = api.enhanceEndpoints({
  addTagTypes: ["Services"],
  endpoints: {
    addService: { invalidatesTags: ["Services"] },
  },
});

export const { useAddServiceMutation } = enhancedAddServiceApi;
