import { GraphQLClient } from "graphql-request"

export const hygraph = new GraphQLClient(process.env.HYGRAPH_ENDPOINT as string, {
    headers: {
      Authorization: `Bearer ${process.env.HYGRAPH_KEY}`,
    },
  });

