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

import type * as Types from "../../api.schema";

import { api } from "../../..";
export type ServicesQueryVariables = Types.Exact<{ [key: string]: never }>;

export type ServicesQueryResult = {
  __typename?: "Query";
  services: Array<{
    __typename?: "Service";
    id: number;
    name: string;
    description?: string | null;
    price?: number | null;
    duration?: number | null;
    durationUnit?: Types.DurationUnitType | null;
    inHouse?: boolean | null;
    category?: Types.CategoryType | null;
  }>;
};

export const ServicesDocument = `
    query services {
  services {
    id
    name
    description
    price
    duration
    durationUnit
    inHouse
    category
  }
}
    `;

const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    services: build.query<ServicesQueryResult, ServicesQueryVariables | void>({
      query: (variables) => ({ document: ServicesDocument, variables }),
    }),
  }),
});

export { injectedRtkApi as api };
export const { useServicesQuery, useLazyServicesQuery } = injectedRtkApi;