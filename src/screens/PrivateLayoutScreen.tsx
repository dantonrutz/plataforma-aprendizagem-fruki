import Link from 'next/link'
import Image from 'next/image'
import logoFruki from '../../public/logo2.png'
import Container from '@/components/Container'
import { Suspense } from 'react'
import DropdownProfile from '@/components/DropdownProfile'

interface Props {
  children: React.ReactNode
}

export default function PrivateLayoutScreen({ children }: Props) {
  const listaOpcoesNavBar = [
    {
      label: 'Início',
      url: '/',
    },
    {
      label: 'Cursos',
      url: '/',
    },
    {
      label: 'Certificações',
      url: '/',
    },
  ]

  return (
    <main>
      <Container
        tag="header"
        className="sticky top-0 z-10 flex flex-row items-center justify-between border-b-2 border-verdeClaro bg-verdeEscuro py-2"
      >
        <Link href="/inicio" className="hidden 880:flex">
          <Image src={logoFruki} alt="Logo da Fruki Bebidas" className="w-48" />
        </Link>
        <nav>
          <ul className="flex flex-row gap-10">
            {listaOpcoesNavBar.map((option, i) => (
              <li key={i}>
                <Link
                  href={option.url}
                  className="defaultTransition text-lg font-medium text-branco hover:text-verdeClaro"
                >
                  {option.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Suspense fallback={<p>loading...</p>}>
          <DropdownProfile />
        </Suspense>
      </Container>
      {children}
      <footer className="flex justify-center gap-2 bg-verdeEscuro py-4 text-branco">
        <a
          href="https://fruki.com.br/"
          target="_blank"
          rel="noopener noreferrer"
          className="defaultTransition font-semibold hover:underline"
        >
          Fruki Bebidas
        </a>
        <span className="text-verdeClaro">•</span>
        <span className="font-semibold">Plataforma de Aprendizagem</span>
      </footer>
    </main>
  )
}
