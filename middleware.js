import { NextResponse } from 'next/server'

export function middleware(request) {
  // const userEmail = request.cookies.get('next-auth.session-token')

  // if (!userEmail && !request.nextUrl.pathname.startsWith('/login')) {
  //   return NextResponse.redirect(new URL('/login', request.url))
  // }

  return NextResponse.next()
}
