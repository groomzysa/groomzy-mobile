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
export type UpdateAccountMutationVariables = Types.Exact<{
  firstName?: Types.InputMaybe<Types.Scalars['String']>;
  lastName?: Types.InputMaybe<Types.Scalars['String']>;
  email?: Types.InputMaybe<Types.Scalars['String']>;
  password?: Types.InputMaybe<Types.Scalars['String']>;
  userImage?: Types.InputMaybe<Types.Scalars['File']>;
}>;


export type UpdateAccountMutationResult = { __typename?: 'Mutation', updateAccount: { __typename?: 'User', id: number, firstName?: string | null, lastName?: string | null, email?: string | null, role?: Types.UserRole | null, state?: Types.UserStatus | null, userImageUrl?: string | null } };


export const UpdateAccountDocument = `
    mutation updateAccount($firstName: String, $lastName: String, $email: String, $password: String, $userImage: File) {
  updateAccount(
    firstName: $firstName
    lastName: $lastName
    email: $email
    password: $password
    userImage: $userImage
  ) {
    id
    firstName
    lastName
    email
    role
    state
    userImageUrl
  }
}
    `;

const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    updateAccount: build.mutation<UpdateAccountMutationResult, UpdateAccountMutationVariables | void>({
      query: (variables) => ({ document: UpdateAccountDocument, variables })
    }),
  }),
});

export { injectedRtkApi as api };
export const { useUpdateAccountMutation } = injectedRtkApi;
