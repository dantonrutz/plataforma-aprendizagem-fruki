import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { authRoutes, defaultLoginRedirect, defaultLoginRoute } from '@/routes'
import token from '@/services/tokenService'

export async function middleware(req: NextRequest) {
  const { nextUrl } = req

  const tokenSavedInCookies = token.getFromRequest(req)

  const isValidToken = tokenSavedInCookies // && (await token.verifyExpiration(tokenSavedInCookies))
  /* Precisa validar o token no backend...  */

  const isAuthRoute = authRoutes.includes(nextUrl.pathname)

  if (isAuthRoute) {
    if (isValidToken) {
      return NextResponse.redirect(new URL(defaultLoginRedirect, nextUrl))
    }

    const res = NextResponse.next()
    token.deleteFromResponse(res)
    return res
  }

  if (!isValidToken) {
    return NextResponse.redirect(new URL(defaultLoginRoute, nextUrl))
  }

  return null
}

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
}
