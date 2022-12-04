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
export type AddTradingAddressMutationVariables = Types.Exact<{
  streetNumber: Types.Scalars['String'];
  streetName: Types.Scalars['String'];
  town: Types.Scalars['String'];
  city: Types.Scalars['String'];
  province: Types.Scalars['String'];
  areaCode: Types.Scalars['String'];
}>;


export type AddTradingAddressMutationResult = { __typename?: 'Mutation', addTradingAddress: { __typename?: 'Address', id: number, streetNumber?: string | null, streetName?: string | null, town?: string | null, city?: string | null, province?: string | null, areaCode?: string | null } };


export const AddTradingAddressDocument = `
    mutation addTradingAddress($streetNumber: String!, $streetName: String!, $town: String!, $city: String!, $province: String!, $areaCode: String!) {
  addTradingAddress(
    streetNumber: $streetNumber
    streetName: $streetName
    town: $town
    city: $city
    province: $province
    areaCode: $areaCode
  ) {
    id
    streetNumber
    streetName
    town
    city
    province
    areaCode
  }
}
    `;

const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    addTradingAddress: build.mutation<AddTradingAddressMutationResult, AddTradingAddressMutationVariables>({
      query: (variables) => ({ document: AddTradingAddressDocument, variables })
    }),
  }),
});

export { injectedRtkApi as api };
export const { useAddTradingAddressMutation } = injectedRtkApi;
