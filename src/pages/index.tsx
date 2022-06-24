import type { NextPage } from "next"
import { Container } from "@chakra-ui/react"
import Hero from "components/pages/index/Hero"
import Features from "components/pages/index/Features"
import Pricing from "components/pages/index/Pricing"
import Head from "next/head"

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Awesome Blog</title>
        <meta
          name="description"
          content="This is an example of a
meta description. This will often show up in search results."
        />
      </Head>
      <Hero />
      <Container pt={4} maxW={"6xl"}>
        <Features />
        <Pricing />
      </Container>
    </div>
  )
}

export default Home
