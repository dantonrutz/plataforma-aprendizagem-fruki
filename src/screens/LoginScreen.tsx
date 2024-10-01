import Image from 'next/image'
import logoBranco from '../../public/logo.png'
import LoginForm from '@/components/forms/LoginForm'

export default function LoginScreen() {
  return (
    <main className="flex min-h-screen flex-col gap-10 bg-verdeEscuro">
      <header className="flex justify-center pt-10">
        <a
          href="https://fruki.com.br/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={logoBranco}
            alt="Logo da Fruki Bebidas"
            className="w-60 rounded-2xl bg-branco px-4 pb-1"
          />
        </a>
      </header>
      <section className="my-auto flex justify-center px-4">
        <article className="flex w-[540px] flex-col gap-6 rounded-2xl bg-branco p-10">
          <div className="space-y-2">
            <h1 className="text-2xl font-bold">Olá, funcionário!</h1>
            <h2>Preencha as informações abaixo para acessar o sistema</h2>
          </div>
          <LoginForm />
        </article>
      </section>
      <footer className="flex justify-center gap-2 bg-branco py-4">
        <a
          href="https://fruki.com.br/"
          target="_blank"
          rel="noopener noreferrer"
          className="defaultTransition font-semibold text-preto hover:underline"
        >
          Fruki Bebidas
        </a>
        <span className="text-verdeEscuro">•</span>
        <span className="font-semibold text-preto">
          Plataforma de Aprendizagem
        </span>
      </footer>
    </main>
  )
}
