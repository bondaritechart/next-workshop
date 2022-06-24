import { gql } from "@apollo/client"
import { POST_FRAGMENT } from "graphql/fragments/post-fragment"

export const POSTS_QUERY = gql`
  ${POST_FRAGMENT}
  query GetPosts {
    posts {
      ...CorePostFields
    }
  }
`
