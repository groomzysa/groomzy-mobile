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
export type AddOperatingTimeMutationVariables = Types.Exact<{
  day: Types.DayType;
  opens: Types.Scalars['String'];
  closes: Types.Scalars['String'];
}>;


export type AddOperatingTimeMutationResult = { __typename?: 'Mutation', addOperatingTime: { __typename?: 'OperatingTime', id: number, day?: Types.DayType | null, opens?: string | null, closes?: string | null } };


export const AddOperatingTimeDocument = `
    mutation addOperatingTime($day: DayType!, $opens: String!, $closes: String!) {
  addOperatingTime(day: $day, opens: $opens, closes: $closes) {
    id
    day
    opens
    closes
  }
}
    `;

const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    addOperatingTime: build.mutation<AddOperatingTimeMutationResult, AddOperatingTimeMutationVariables>({
      query: (variables) => ({ document: AddOperatingTimeDocument, variables })
    }),
  }),
});

export { injectedRtkApi as api };
export const { useAddOperatingTimeMutation } = injectedRtkApi;
