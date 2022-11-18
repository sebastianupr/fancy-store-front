import { ApolloClient, InMemoryCache } from '@apollo/client';
// import { offsetLimitPagination } from "@apollo/client/utilities";
import config from "@config";

const { graphqlUri } = config()

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        products: {
          merge: true
        }
      }
    }
  }
})

const client = new ApolloClient({
  uri: graphqlUri,
  cache,
});

export default client;
