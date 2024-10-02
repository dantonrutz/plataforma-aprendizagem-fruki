import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'

const tokenName = process.env.NEXT_PUBLIC_COOKIE_NAME || ''

const token = {
  saveInCookies(accessToken: string) {
    cookies().set({
      name: tokenName,
      value: accessToken,
      maxAge: 6 * 60 * 60 * 1000, // 6 horas em ms
      httpOnly: true,
      path: '/',
      sameSite: 'lax',
      secure: false,
    })
    console.log('Token salvo -', accessToken)
  },

  getFromCookies() {
    return cookies().get(tokenName)?.value
  },

  getFromRequest(req: NextRequest) {
    console.log('Nome do token -', tokenName)
    console.log('Token com string - ', req.cookies.get('authToken')?.value)
    console.log('Token com env -', req.cookies.get(tokenName)?.value)
    return req.cookies.get(tokenName)?.value
  },

  deleteFromResponse(res: NextResponse) {
    res.cookies.delete(tokenName)
  },

  delete() {
    cookies().delete(tokenName)
  },
}

export default token
