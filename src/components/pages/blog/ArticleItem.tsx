import React from "react"
import { Box, Heading, Image, WrapItem } from "@chakra-ui/react"
import { CorePostFieldsFragment } from "generated/graphql"
import Link from "next/link"
import { Routes } from "shared/routes"

type Props = {
  post: CorePostFieldsFragment
}

const ArticleItem = ({ post }: Props) => {
  return (
    <WrapItem width={{ base: "100%", sm: "45%", md: "45%", lg: "30%" }}>
      <Box w="100%">
        <Box borderRadius="lg" overflow="hidden">
          <Link href={`${Routes.BLOG}/${post.slug}`} passHref>
            <a>
              <Image
                transform="scale(1.0)"
                src={post.coverPhoto.url}
                alt="some text"
                objectFit="contain"
                width="100%"
                height={180}
                transition="0.3s ease-in-out"
                _hover={{
                  transform: "scale(1.05)",
                }}
              />
            </a>
          </Link>
        </Box>
        <Heading fontSize="xl" marginTop="2">
          <Link href={`${Routes.BLOG}/${post.slug}`}>{post.title}</Link>
        </Heading>
      </Box>
    </WrapItem>
  )
}

export default ArticleItem
