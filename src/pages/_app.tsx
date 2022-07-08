import type { AppProps } from "next/app"
import { ChakraProvider } from "@chakra-ui/react"
import DefaultLayout from "components/layouts/DefaultLayout"
import { ApolloProvider } from "@apollo/client"
import { client } from "shared/apollo"

function MyApp({ Component, pageProps }: AppProps) {
  console.log("pageProps", pageProps)
  return (
    <ApolloProvider client={client}>
      <ChakraProvider>
        <DefaultLayout>
          <Component {...pageProps} />
        </DefaultLayout>
      </ChakraProvider>
    </ApolloProvider>
  )
}

export default MyApp
