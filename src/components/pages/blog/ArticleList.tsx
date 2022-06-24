import React from "react"
import { Heading, Divider, Wrap } from "@chakra-ui/react"
import ArticleItem from "./ArticleItem"
import { CorePostFieldsFragment } from "generated/graphql"

type Props = {
  posts: Array<CorePostFieldsFragment>
}

const ArticleList = ({ posts }: Props) => {
  return (
    <div>
      <Heading as="h2" marginTop="5">
        Latest articles
      </Heading>
      <Divider marginTop="5" />
      <Wrap spacing="30px" marginTop="5" mb={5}>
        {posts.map((post) => (
          <ArticleItem key={post.id} post={post} />
        ))}
      </Wrap>
    </div>
  )
}

export default ArticleList
