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
export type AddTradingInfoMutationVariables = Types.Exact<{
  tradingName: Types.Scalars['String'];
  phone: Types.Scalars['String'];
  logo?: Types.InputMaybe<Types.Scalars['File']>;
}>;


export type AddTradingInfoMutationResult = { __typename?: 'Mutation', addTradingInfo: { __typename?: 'Provider', id: number, tradingName?: string | null, phone?: string | null, logoUrl?: string | null } };


export const AddTradingInfoDocument = `
    mutation addTradingInfo($tradingName: String!, $phone: String!, $logo: File) {
  addTradingInfo(tradingName: $tradingName, phone: $phone, logo: $logo) {
    id
    tradingName
    phone
    logoUrl
  }
}
    `;

const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    addTradingInfo: build.mutation<AddTradingInfoMutationResult, AddTradingInfoMutationVariables>({
      query: (variables) => ({ document: AddTradingInfoDocument, variables })
    }),
  }),
});

export { injectedRtkApi as api };
export const { useAddTradingInfoMutation } = injectedRtkApi;
