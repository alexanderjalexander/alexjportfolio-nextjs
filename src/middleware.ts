import { NextResponse, NextRequest } from "next/server";


function getFullURLFromLocal(url: string, base:string) : string {
  return new URL(url, base).toString()
}

// See: https://dev.to/geiel/how-to-use-firebase-authentication-in-nextjs-13-client-and-server-side-1bbn
export async function middleware(request: NextRequest) {
  const session = request.cookies.get("alexjportfolio_session");

  // If a session exists, don't allow user to log in again
  if (session) {
    switch (request.url) {
      case (getFullURLFromLocal("/admin/login", request.url)):
        return NextResponse.redirect(getFullURLFromLocal("/admin", request.url));
      default:
        return NextResponse.next();
    }
  } else {
    switch (request.url) {
      case (getFullURLFromLocal("/admin", request.url)):
        return NextResponse.redirect(getFullURLFromLocal("/admin/login", request.url));
      default:
        return NextResponse.next();
    }
  }
}