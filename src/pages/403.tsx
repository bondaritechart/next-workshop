import React from "react"
import Link from "next/link"
import { Routes } from "shared/routes"
import { Container } from "@chakra-ui/react"

const ErrorPage = () => {
  return (
    <Container>
      <div>Oops, you don't have permission to access this page.</div>
      <Link href={Routes.DASHBOARD}>Go to the dashboard</Link>
    </Container>
  )
}

export default ErrorPage
