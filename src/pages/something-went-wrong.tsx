import React from "react"
import Link from "next/link"
import { Routes } from "shared/routes"
import { Container } from "@chakra-ui/react"

const SomethingWentWrong = () => {
  return (
    <Container maxW="6xl">
      <div>Oops, Something Went Wrong.</div>
      <Link href={Routes.ROOT}>Contact our support</Link> <br />
      <Link href={Routes.ROOT}>Go Home</Link>
    </Container>
  )
}

export default SomethingWentWrong
