'use server'

import api from '@/services/apiService'

export async function signIn(email: string, password: string) {
  try {
    const res = await api.post('/login', { email, password })

    if (res.success) {
      // salvar token nos cookies

      return { success: true }
    }

    return { success: false, message: res.data.message }
  } catch (error) {
    return { success: false, message: 'Erro do servidor - AUTH2' }
  }
}
