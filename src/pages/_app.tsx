import type { AppProps } from "next/app"
import { ChakraProvider } from "@chakra-ui/react"
import DefaultLayout from "components/layouts/DefaultLayout"
import { ApolloProvider } from "@apollo/client"
import { client } from "shared/apollo"
import { SessionProvider } from "next-auth/react"

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <ApolloProvider client={client}>
        <ChakraProvider>
          <DefaultLayout>
            <Component {...pageProps} />
          </DefaultLayout>
        </ChakraProvider>
      </ApolloProvider>
    </SessionProvider>
  )
}

export default MyApp
