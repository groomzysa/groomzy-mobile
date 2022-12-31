import { createApi } from "@reduxjs/toolkit/query/react";
import { graphqlRequestBaseQuery } from "@rtk-query/graphql-request-base-query";
import { GraphQLClient } from "graphql-request";
import { API_BASE_URL } from "../../config";
import { RootState } from "../store/store";

const graphqlClient: GraphQLClient = new GraphQLClient(API_BASE_URL);

export const api = createApi({
  baseQuery: graphqlRequestBaseQuery({
    //@ts-ignore
    client: graphqlClient,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).app.token;
      const isImageUpload = (getState() as RootState).account.isImageUpload;

      // If we have a token set in state,
      // update auth header.
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }

      if (isImageUpload) {
        // headers.set("Content-Type", "enctype");
      }

      headers.set("Accept", "application/json");

      return headers;
    },
  }),
  endpoints: () => ({}),
});
