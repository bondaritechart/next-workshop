import React from "react"
import { Container } from "@chakra-ui/react"
import { createGetServerSideProps } from "shared/server"
import { User } from "shared/types"

export const getServerSideProps = createGetServerSideProps(async () => {
  return {
    props: {},
  }
})

const Admin = ({ user }: { user: User }): JSX.Element => {
  return <Container>hello, {user.name}</Container>
}

export default Admin
