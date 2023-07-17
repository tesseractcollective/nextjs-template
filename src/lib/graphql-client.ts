import { GraphQLClient } from "graphql-request";
import { getSdk } from "@/graphql/generated/graphql";
import type { SiteLibraryFieldsFragment } from "@/graphql/generated/graphql";

const endpoint = process.env.GRAPHQL_URL!;

export const client = new GraphQLClient(endpoint, {
  requestMiddleware: async (request) => {
    let didLogGraphql = false;
    try {
      if (typeof request.body === "string") {
        const body = JSON.parse(request.body);
        if (body.operationName) {
          console.debug("graphql", body.operationName);
          didLogGraphql = true;
        }
      }
    } catch (error) {}

    if (!didLogGraphql) {
      console.log(`${request.method}, ${request.url}`);
    }
    return request;
  },
});

export const sdkClient = getSdk(client);

export async function getSiteLibrary(): Promise<SiteLibraryFieldsFragment> {
  const { siteLibrary } = await sdkClient.siteLibrary();
  return siteLibrary!;
}
