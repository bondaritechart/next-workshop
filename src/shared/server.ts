import { Routes } from "./routes"
import { GetServerSideProps, GetServerSidePropsContext } from "next"

export const createGetServerSideProps = (
  callback: (ctx: GetServerSidePropsContext) => ReturnType<GetServerSideProps>
) => {
  return async (ctx: GetServerSidePropsContext): Promise<ReturnType<GetServerSideProps>> => {
    try {
      return await callback(ctx)
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
