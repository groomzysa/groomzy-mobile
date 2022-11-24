import { api } from "./addProvider.generated";

export const enhancedAddProviderApi = api.enhanceEndpoints({
  addTagTypes: ["User"],
  endpoints: {
    addProvider: { invalidatesTags: ["User"] },
  },
});

export const { useAddProviderMutation } = enhancedAddProviderApi;
