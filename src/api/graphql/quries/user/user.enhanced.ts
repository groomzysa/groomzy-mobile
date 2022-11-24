import { api } from "./user.generated";

export const enhancedUsersApi = api.enhanceEndpoints({
  addTagTypes: ["User"],
  endpoints: {
    user: { providesTags: ["User"] },
  },
});

export const { useLazyUserQuery, useUserQuery } = enhancedUsersApi;
