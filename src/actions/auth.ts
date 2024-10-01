'use server'

// import api from '@/services/apiService'
import token from '@/services/tokenService'
import { redirect } from 'next/navigation'

export async function signIn(email: string, password: string) {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  try {
    /* const res = await api.post('/login', { email, password })

    if (res.success) {
      token.saveInCookies(res.data.accessToken)

      return { success: true }
    } 

    return { success: false, message: res.data.message } */

    token.saveInCookies(`${email}${password}`)
    return { success: true }
  } catch (error) {
    console.log(error)
    return { success: false, message: 'Erro do servidor - AUTH2' }
  }
}

export async function signOut() {
  token.delete()

  redirect('/login')
}
