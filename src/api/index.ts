import { createApi } from "@reduxjs/toolkit/query/react";
import { graphqlRequestBaseQuery } from "@rtk-query/graphql-request-base-query";
import { GraphQLClient } from "graphql-request";

const client = new GraphQLClient("http://192.168.0.154:4000", { headers: {} });

export const api = createApi({
  //@ts-ignore
  baseQuery: graphqlRequestBaseQuery({ client }),
  endpoints: () => ({}),
});
