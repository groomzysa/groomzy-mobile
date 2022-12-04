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
export type UpdateProviderMutationVariables = Types.Exact<{
  providerId: Types.Scalars['Int'];
  tradingName?: Types.InputMaybe<Types.Scalars['String']>;
  phone?: Types.InputMaybe<Types.Scalars['String']>;
  logo?: Types.InputMaybe<Types.Scalars['File']>;
}>;


export type UpdateProviderMutationResult = { __typename?: 'Mutation', updateProvider: { __typename?: 'Provider', id: number, tradingName?: string | null, phone?: string | null, logoUrl?: string | null } };


export const UpdateProviderDocument = `
    mutation updateProvider($providerId: Int!, $tradingName: String, $phone: String, $logo: File) {
  updateProvider(
    providerId: $providerId
    tradingName: $tradingName
    phone: $phone
    logo: $logo
  ) {
    id
    tradingName
    phone
    logoUrl
  }
}
    `;

const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    updateProvider: build.mutation<UpdateProviderMutationResult, UpdateProviderMutationVariables>({
      query: (variables) => ({ document: UpdateProviderDocument, variables })
    }),
  }),
});

export { injectedRtkApi as api };
export const { useUpdateProviderMutation } = injectedRtkApi;

