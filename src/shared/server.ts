import { Routes } from "./routes"
import { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult } from "next"
import { unstable_getServerSession } from "next-auth"
import { authOptions } from "pages/api/auth/[...nextauth]"

async function addUser(context: GetServerSidePropsContext, response: GetServerSidePropsResult<any>) {
  if ("props" in response) {
    try {
      const session = await unstable_getServerSession(context.req, context.res, authOptions)
      response.props.user = session?.user
    } catch (e) {
      console.log(e)
    }
  }
  return response
}

export const createGetServerSideProps = (
  callback: (ctx: GetServerSidePropsContext) => ReturnType<GetServerSideProps>
) => {
  return async (ctx: GetServerSidePropsContext): Promise<ReturnType<GetServerSideProps>> => {
    try {
      const response = await callback(ctx)

      return await addUser(ctx, response)
    } catch (e) {
      console.log(e)
      return {
        redirect: {
          destination: Routes.SOMETHING_WRONG,
          permanent: false,
        },
      }
    }
  }
}
