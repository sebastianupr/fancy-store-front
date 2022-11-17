import { ApolloClient, InMemoryCache } from '@apollo/client';
import config from "@config";

const { graphqlUri } = config()

const client = new ApolloClient({
  uri: graphqlUri,
  cache: new InMemoryCache(),
});

export default client;
