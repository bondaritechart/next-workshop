import { Container } from "@chakra-ui/react"
import React from "react"
import Hero from "components/pages/about/Hero"
import ArticleList from "components/pages/blog/ArticleList"
import { useQuery } from "@apollo/client"
import { POSTS_QUERY } from "graphql/queries/posts-query"

const Blog = () => {
  const { data } = useQuery(POSTS_QUERY)

  return (
    <div>
      <Hero />
      <Container maxW={"6xl"}>{data ? <ArticleList posts={data.posts} /> : <p>No data</p>}</Container>
    </div>
  )
}

export default Blog
