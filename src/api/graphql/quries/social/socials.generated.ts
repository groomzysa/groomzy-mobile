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
export type SocialsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type SocialsQueryResult = { __typename?: 'Query', socials: Array<{ __typename?: 'Social', id: number, name?: string | null, username?: string | null }> };


export const SocialsDocument = `
    query socials {
  socials {
    id
    name
    username
  }
}
    `;

const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    socials: build.query<SocialsQueryResult, SocialsQueryVariables | void>({
      query: (variables) => ({ document: SocialsDocument, variables })
    }),
  }),
});

export { injectedRtkApi as api };
export const { useSocialsQuery, useLazySocialsQuery } = injectedRtkApi;

