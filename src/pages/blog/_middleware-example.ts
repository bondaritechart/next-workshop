import { NextResponse } from "next/server"
import { NextRequest } from "next/server"
import { Routes } from "shared/routes"

export default function middleware(req: NextRequest) {
  return NextResponse.redirect("http://localhost:2401" + Routes.STATIC_BLOG)
}
