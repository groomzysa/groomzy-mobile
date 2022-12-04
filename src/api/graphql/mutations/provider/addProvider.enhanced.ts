import { api } from "./addProvider.generated";

export const enhancedAddProviderApi = api.enhanceEndpoints({
  addTagTypes: ["Provider"],
  endpoints: {
    addProvider: { invalidatesTags: ["Provider"] },
  },
});

export const { useAddProviderMutation } = enhancedAddProviderApi;
