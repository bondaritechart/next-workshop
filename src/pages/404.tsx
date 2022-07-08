import React from "react"
import Link from "next/link"
import { Routes } from "shared/routes"
import { Container } from "@chakra-ui/react"

const ErrorPage = () => {
  return (
    <Container>
      <div>Oops, the page you are looking for is not found.</div>
      <Link href={Routes.ROOT}>Go Home</Link>
    </Container>
  )
}

export default ErrorPage
