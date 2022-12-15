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
export type UpdateAccountAddressMutationVariables = Types.Exact<{
  addressId: Types.Scalars['Int'];
  streetNumber?: Types.InputMaybe<Types.Scalars['String']>;
  streetName?: Types.InputMaybe<Types.Scalars['String']>;
  town?: Types.InputMaybe<Types.Scalars['String']>;
  city?: Types.InputMaybe<Types.Scalars['String']>;
  province?: Types.InputMaybe<Types.Scalars['String']>;
  areaCode?: Types.InputMaybe<Types.Scalars['String']>;
}>;


export type UpdateAccountAddressMutationResult = { __typename?: 'Mutation', updateAccountAddress: { __typename?: 'Address', id: number, streetNumber?: string | null, streetName?: string | null, town?: string | null, city?: string | null, province?: string | null, areaCode?: string | null } };


export const UpdateAccountAddressDocument = `
    mutation updateAccountAddress($addressId: Int!, $streetNumber: String, $streetName: String, $town: String, $city: String, $province: String, $areaCode: String) {
  updateAccountAddress(
    addressId: $addressId
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
    updateAccountAddress: build.mutation<UpdateAccountAddressMutationResult, UpdateAccountAddressMutationVariables>({
      query: (variables) => ({ document: UpdateAccountAddressDocument, variables })
    }),
  }),
});

export { injectedRtkApi as api };
export const { useUpdateAccountAddressMutation } = injectedRtkApi;
