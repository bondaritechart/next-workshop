import { gql } from "@apollo/client"

export const POST_FRAGMENT = gql`
  fragment CorePostFields on Post {
    id
    title
    slug
    coverPhoto {
      url
    }
  }
`
