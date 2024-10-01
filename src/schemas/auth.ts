import { z } from 'zod'

export const LoginSchema = z.object({
  email: z
    .string({ required_error: 'Este campo é obrigatório' })
    .email('E-mail inválido'),
  password: z
    .string({ required_error: 'Este campo é obrigatório' })
    .min(10, 'A senha deve ter no mínimo 10 caracteres'),
})

export type LoginType = z.infer<typeof LoginSchema>
