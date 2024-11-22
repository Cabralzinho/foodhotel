import { NextRequest, NextResponse } from "next/server";

export const middleware = (request: NextRequest) => {
  const token = request.cookies.get("authToken");
  const targetPath = request.nextUrl.pathname;


  if (!token && targetPath !== "/auth/login") {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }
};

export const config = {
  matcher: "/((?!api|_next/static|_next/image|favicon.ico).*)",
};
