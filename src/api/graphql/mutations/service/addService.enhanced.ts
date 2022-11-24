import { api } from "./addService.generated";

export const enhancedAddServiceApi = api.enhanceEndpoints({
  endpoints: {
    addService: {},
  },
});

export const { useAddServiceMutation } = enhancedAddServiceApi;
