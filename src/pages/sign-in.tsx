import React, { FormEventHandler, useState } from "react"
import { FormControl, FormLabel, Container, Heading, Input, Button } from "@chakra-ui/react"
import { signIn } from "next-auth/react"
import { useRouter } from "next/router"
import { Routes } from "shared/routes"

const SignIn = (): JSX.Element => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()

  const handleSignIn: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    const resp = await signIn("credentials", { email, password, redirect: false })
    if (!resp?.error) {
      router.push((router.query.callbackUrl as string) || Routes.DASHBOARD)
    } else {
      alert(resp?.error)
    }
  }

  return (
    <Container>
      <Heading my={10} as={"h1"}>
        Sign In
      </Heading>
      <form action="" onSubmit={handleSignIn}>
        <FormControl mb={4}>
          <FormLabel>Email address</FormLabel>
          <Input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            type="email"
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Password</FormLabel>
          <Input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            type="password"
          />
        </FormControl>

        <Button type={"submit"} colorScheme="blue">
          Sign In
        </Button>
      </form>
    </Container>
  )
}

export default SignIn
