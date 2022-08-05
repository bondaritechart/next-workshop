import { withAuth } from "next-auth/middleware"
import { Routes } from "shared/routes"

export default withAuth(
  function middleware(req) {
    console.log("middleware", req.nextauth.token)
  },
  {
    pages: {
      signIn: Routes.PERMISSION,
    },
    callbacks: {
      authorized: ({ token }) => {
        return token?.role === "admin"
      },
    },
  }
)
