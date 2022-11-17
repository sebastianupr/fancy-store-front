export type Config = {
  env: 'dev' | 'staging' | 'prod'
  graphqlUri: string;
}

const config = (): Config => ({
  env: process.env.NEXT_PUBLIC_ENVIRONMENT as Config["env"],
  graphqlUri: process.env.NEXT_PUBLIC_GRAPHQL_URI as string,
})

export default config