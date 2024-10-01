const apiUrl = process.env.NEXT_PUBLIC_API_URL

export const api = {
  async get(endpoint: string, accessToken?: string, revalidateTag?: string) {
    const res = await fetch(`${apiUrl}${endpoint}`, {
      method: 'GET',
      headers: {
        ...(accessToken && { Authorization: `Bearer ${accessToken}` }),
      },
      cache: 'no-store',
      next: { tags: [`${revalidateTag}`] },
    })

    const data = await res.json()

    return { success: res.ok, data }
  },

  async post(endpoint: string, body: object, accessToken?: string) {
    const res = await fetch(`${apiUrl}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(accessToken && { Authorization: `Bearer ${accessToken}` }),
      },
      body: JSON.stringify(body),
    })

    const data = await res.json()

    return { success: res.ok, data }
  },

  async patch(endpoint: string, body: object, accessToken?: string) {
    const res = await fetch(`${apiUrl}${endpoint}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        ...(accessToken && { Authorization: `Bearer ${accessToken}` }),
      },
      body: JSON.stringify(body),
    })

    const data = await res.json()

    return { success: res.ok, data }
  },

  async delete(endpoint: string, accessToken?: string) {
    const res = await fetch(`${apiUrl}${endpoint}`, {
      method: 'DELETE',
      headers: {
        ...(accessToken && { Authorization: `Bearer ${accessToken}` }),
      },
    })

    const data = await res.json()

    return { success: res.ok, data }
  },

  async patchImage(endpoint: string, formData: FormData, accessToken?: string) {
    const res = await fetch(`${apiUrl}${endpoint}`, {
      method: 'PATCH',
      headers: {
        ...(accessToken && { Authorization: `Bearer ${accessToken}` }),
      },
      body: formData,
    })

    const data = await res.json()

    return { success: res.ok, data }
  },

  async getFile(
    endpoint: string,
    accessToken?: string,
    revalidateTag?: string[],
  ) {
    const res = await fetch(`${apiUrl}${endpoint}`, {
      method: 'GET',
      headers: {
        ...(accessToken && { Authorization: `Bearer ${accessToken}` }),
      },
      cache: 'no-store',
      next: { tags: revalidateTag },
    })

    if (!res.ok) {
      return { success: false, message: 'Erro' }
    }

    return { success: true, message: await res.blob() }
  },
}

export default api
