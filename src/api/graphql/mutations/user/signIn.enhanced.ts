import { api } from "./signIn.generated";

export const enhancedSignInApi = api.enhanceEndpoints({
  endpoints: {
    signIn: {},
  },
});

export const { useSignInMutation } = enhancedSignInApi;
