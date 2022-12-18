/**
 *
 * THIS FILE IS AUTOGENERATED, DO NOT EDIT IT!
 *
 * instead, edit one of the `.graphql` files in this project and run
 *
 * npm run graphql-codegen
 *
 * for this file to be re-created
 */

import type * as Types from '../../api.schema';

import { api } from '../../..';
export type UpdateSocialMutationVariables = Types.Exact<{
  socialId: Types.Scalars['Int'];
  name?: Types.InputMaybe<Types.Scalars['String']>;
  username?: Types.InputMaybe<Types.Scalars['String']>;
}>;


export type UpdateSocialMutationResult = { __typename?: 'Mutation', updateSocial: { __typename?: 'Social', id: number, name?: string | null, username?: string | null } };


export const UpdateSocialDocument = `
    mutation updateSocial($socialId: Int!, $name: String, $username: String) {
  updateSocial(socialId: $socialId, name: $name, username: $username) {
    id
    name
    username
  }
}
    `;

const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    updateSocial: build.mutation<UpdateSocialMutationResult, UpdateSocialMutationVariables>({
      query: (variables) => ({ document: UpdateSocialDocument, variables })
    }),
  }),
});

export { injectedRtkApi as api };
export const { useUpdateSocialMutation } = injectedRtkApi;
