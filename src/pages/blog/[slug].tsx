import React from "react"
import { useQuery } from "@apollo/client"
import { POST_QUERY } from "graphql/queries/post-query"
import { useRouter } from "next/router"
import { GetPostQuery } from "generated/graphql"
import { Container, Heading, VStack } from "@chakra-ui/react"

const Slug = () => {
  const router = useRouter()
  const { data } = useQuery<GetPostQuery>(POST_QUERY, {
    variables: {
      slug: router.query.slug,
    },
  })

  if (!data) {
    return <div>Loading</div>
  }
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
