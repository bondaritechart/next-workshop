import { gql } from "@apollo/client"
import { POST_FRAGMENT } from "graphql/fragments/post-fragment"

export const POST_QUERY = gql`
  ${POST_FRAGMENT}
  query GetPost($slug: String!) {
    post(where: { slug: $slug }) {
      ...CorePostFields
      content {
        html
      }
    }
  }
`
