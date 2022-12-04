import { api } from "./updateProvider.generated";

export const enhancedUpdateProviderApi = api.enhanceEndpoints({
  addTagTypes: ["Provider"],
  endpoints: {
    updateProvider: { invalidatesTags: ["Provider"] },
  },
});

export const { useUpdateProviderMutation } = enhancedUpdateProviderApi;
