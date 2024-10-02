import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'

const tokenName = process.env.COOKIE_NAME || ''

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
  },

  getFromCookies() {
    return cookies().get(tokenName)?.value
  },

  getFromRequest(req: NextRequest) {
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
