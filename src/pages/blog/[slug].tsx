import React from "react"
import { POST_QUERY } from "graphql/queries/post-query"
import { GetPostQuery } from "generated/graphql"
import { Container, Heading, VStack } from "@chakra-ui/react"
import { client } from "shared/apollo"
import { createGetServerSideProps } from "shared/server"

export const getServerSideProps = createGetServerSideProps(async (ctx) => {
  const { data } = await client.query({
    query: POST_QUERY,
    variables: {
      slug: ctx.query.slug,
    },
  })
  console.log("getServerSideProps call slug")

  if (!data.post) {
    return {
      notFound: true,
    }
  }

  return {
    props: { data },
  }
})

type Props = {
  data: GetPostQuery
}

const Slug = ({ data }: Props) => {
  return (
    <Container maxW={"6xl"}>
      <img src={data.post?.coverPhoto.url} alt="" />
      <VStack paddingY="40px" spacing="2" alignItems="flex-start">
        <Heading as="h2">{data.post?.title}</Heading>
        <div dangerouslySetInnerHTML={{ __html: data.post?.content.html || "" }} />
      </VStack>
    </Container>
  )
}

export default Slug
