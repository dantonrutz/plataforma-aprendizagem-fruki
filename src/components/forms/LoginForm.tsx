'use client'

import { useRouter } from 'next/navigation'
import { signIn } from '@/actions/auth'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { LoginSchema, LoginType } from '@/schemas/auth'
import Input from '@/components/Input'
import Button from '@/components/Button'

export default function LoginForm() {
  const router = useRouter()

  const loginFormSubmit = async (data: LoginType) => {
    const res = await signIn(data.email, data.password)

    if (!res.success) {
      alert('Erro ao logar')
    }

    router.replace('/')
  }

  const methods = useForm<LoginType>({
    resolver: zodResolver(LoginSchema),
  })

  return (
    <FormProvider {...methods}>
      <form
        className="flex flex-col gap-4"
        onSubmit={methods.handleSubmit(loginFormSubmit)}
      >
        <Input label="E-mail" name="email" placeholder="Insira o seu e-mail" />
        <Input
          label="Senha"
          name="password"
          type="password"
          placeholder="Insira a sua senha"
        />
        <Button label="Entrar" />
      </form>
    </FormProvider>
  )
}
