import { Container, Heading } from "@chakra-ui/react"
import React from "react"
import ArticleList from "components/pages/blog/ArticleList"
import { POSTS_QUERY } from "graphql/queries/posts-query"
import { client } from "shared/apollo"
import { GetPostsQuery } from "generated/graphql"
import { createGetServerSideProps } from "shared/server"

export const getServerSideProps = createGetServerSideProps(async () => {
  const { data } = await client.query({
    query: POSTS_QUERY,
    fetchPolicy: "network-only",
  })
  console.log("getServerSideProps call")

  return {
    props: {
      data,
    },
  }
})

type Props = {
  data: GetPostsQuery
}

const Blog = ({ data }: Props) => {
  return (
    <Container maxW={"6xl"}>
      <Heading as={"h1"}>Server Side Blog</Heading>
      <ArticleList posts={data.posts} />
    </Container>
  )
}

export default Blog
