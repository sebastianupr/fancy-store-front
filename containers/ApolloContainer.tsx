import { ApolloProvider } from "@apollo/client";
import apolloClient from "../graphql/client";

export default function ApolloContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
}
