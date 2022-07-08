import React from "react"
import { POST_QUERY } from "graphql/queries/post-query"
import { GetPostQuery, GetPostsQuery } from "generated/graphql"
import { Container, Heading, VStack } from "@chakra-ui/react"
import { client } from "shared/apollo"
import { GetStaticPathsResult, GetStaticPropsContext } from "next"
import { POSTS_QUERY } from "graphql/queries/posts-query"

export const getStaticProps = async (ctx: GetStaticPropsContext) => {
  const slug = ctx.params?.slug

  const { data } = await client.query({
    query: POST_QUERY,
    variables: {
      slug,
    },
  })

  if (!data.post) {
    return {
      notFound: true,
    }
  }

  return {
    props: { data },
  }
}

export const getStaticPaths = async (): Promise<GetStaticPathsResult> => {
  const {
    data: { posts },
  } = await client.query<GetPostsQuery>({
    query: POSTS_QUERY,
  })

  return {
    fallback: false,
    paths: posts.map((post) => ({ params: { slug: post.slug } })),
  }
}

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
