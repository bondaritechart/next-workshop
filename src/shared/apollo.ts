import { ApolloClient, InMemoryCache } from "@apollo/client"

export const client = new ApolloClient({
  uri: "https://api-eu-central-1.graphcms.com/v2/cl3vupzhgfwkq01xkexibc9lk/master",
  cache: new InMemoryCache(),
})
