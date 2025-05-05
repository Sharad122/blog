import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {

  const { pathname } = request.nextUrl;
  const blogPage = NextResponse.redirect(new URL("/blog", request.url));

  if (pathname === "/") return blogPage;

  // if (pathname.startsWith("/api")) {
  //   const apiKey = request.headers.get("x-api-key");
  //   if (!apiKey || apiKey !== process.env.API_KEY) return blogPage;
  // }

  return NextResponse.next();
  
}
