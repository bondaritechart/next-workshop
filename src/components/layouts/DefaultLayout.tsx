import React from "react"
import Menu from "../Menu"
import Footer from "../Footer"
import styled from "@emotion/styled"

type Props = {
  children?: React.ReactNode
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  main {
    flex: 1;
  }
`

const DefaultLayout = ({ children }: Props) => {
  return (
    <Wrap>
      <Menu />
      <main>{children}</main>
      <Footer />
    </Wrap>
  )
}

export default DefaultLayout
