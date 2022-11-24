import { api } from "./updateProvider.generated";

export const enhancedUpdateProviderApi = api.enhanceEndpoints({
  addTagTypes: ["User"],
  endpoints: {
    updateProvider: { invalidatesTags: ["User"] },
  },
});

export const { useUpdateProviderMutation } = enhancedUpdateProviderApi;
