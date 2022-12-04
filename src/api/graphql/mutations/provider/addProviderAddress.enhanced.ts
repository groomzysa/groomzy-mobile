import { api } from "./addProviderAddress.generated";

export const enhancedAddProviderAddressApi = api.enhanceEndpoints({
  addTagTypes: ["Provider"],
  endpoints: {
    addProviderAddress: { invalidatesTags: ["Provider"] },
  },
});

export const { useAddProviderAddressMutation } = enhancedAddProviderAddressApi;
