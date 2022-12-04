import { api } from "./updateProviderAddress.generated";

export const enhancedAddProviderAddressApi = api.enhanceEndpoints({
  addTagTypes: ["Provider"],
  endpoints: {
    updateProviderAddress: { invalidatesTags: ["Provider"] },
  },
});

export const { useUpdateProviderAddressMutation } =
  enhancedAddProviderAddressApi;
