import React from "react"
import { Container } from "@chakra-ui/react"
import { createGetServerSideProps } from "shared/server"
import { User } from "shared/types"
export const getServerSideProps = createGetServerSideProps(async () => {
  return {
    props: {},
  }
})
const Dashboard = ({ user }: { user: User }): JSX.Element => {
  return <Container>hello, {user.email}</Container>
}

export default Dashboard
