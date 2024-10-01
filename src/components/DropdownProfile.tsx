import Link from 'next/link'
import Image from 'next/image'
import { signOut } from '@/actions/auth'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu'
import {
  ChevronDown,
  LogOut,
  User,
  Clipboard,
  Bookmark,
  MessageCircle,
} from 'lucide-react'
import defaultImage from '../../public/default_image.png'

export default async function DropdownProfile() {
  const email = 'danton.rutz@universo.univates.br'
  const nome = 'Danton Yuri Rutz'
  const imagem =
    'https://lh3.googleusercontent.com/a-/ALV-UjUrSa32RHzULwK2jv-7R7aeiI3EBRSbvX1BR1fhZmd-YNNqycRchhM3qZVj8U4LO0IuK5Bd9b7Rb5bjeuBDOMtlKHu-CabV5FQ72HgSjEhZSO3don37iUgxL7KQ0Wd9iDPL_TjCQVIgYh9KJSjSG-BsgY_YPJsAZkIhgtmL5lpD7pAmg6221Hzn0SlYQd4Xfj-kZEarZWh-0dw3xNnOta7dDBUZwKxsHKbbhMkFcd714pBt3GyuTOg22S3zgO0xbz9B_Lv2FeL2C_NKjDIeBNJadmjMZK32A2v0PhN8ng7H9Fgt3BXFGntt7nKchxQmpDF-aDp1GHA9k_so1W1ijRUadw_k810YHpTeF1nuFjvTYhpBP-WU9tPbzZIX6oFTsYU21xa9tP2StKwMhrHzhYDI6VVJ7eLuws8-FlkrmYCPdXfKZcxT5oK3eiKPoImXFE2kUJt4bvrMi5BrFNJAMRQVixcQKjaksspzZJc-WbmxphPLuTYSlg1sjKquRRK4UvLyuGwKn4N1Ol6NkZgaI5TO-9FKSZlAscnZMODttjFNQ1xQQH3_25QCXzXpQp-yLpSLqrz2cMSLkpimRfAOkmzWeVlEjRI1AMGVefNpfUsh7bFB7LRTY5v87PS8or_XGsWe0yfHNczEQN60RupUYeBj2-fqM2IzEFktjC5K0nxtl7m5apSGFZCqiXdeco9ygs9MMcgiPwgNm7A7Px2IQKZQFwt4YhiGxgoZ1DNiTs2BNMpjMOywzEPR_dqZMVAY-p6mPn0RPAdiaJnSBmCsu_5oM2m9gXxIvcOtCVnSXQEjBU0Tzt5vZfNRcpfNIk-Bk5qP8aXvbW8ilbIMLZIFMMVDUfwHTBJ1uXU1kBDzSDIeZpXMvWxcSYLCK50G-8dTiodgq7gLZuDm59fFCLbKFHFbxKVg0ReKOJsHQz47cFB4ageiaRm_4JsRhWRcEinZBmAqkjRt6WTjbsNhAQaGmEVE=s96-c'

  const listaOpcoesDropdownMenu = [
    {
      label: 'Meu perfil',
      url: '/perfil',
      icone: (
        <User
          size={16}
          strokeWidth={2}
          className="defaultTransition text-verdeEscuro/60 group-hover:text-verdeClaro"
        />
      ),
    },
    {
      label: 'Cursos',
      url: '/',
      icone: (
        <Clipboard
          size={16}
          strokeWidth={2}
          className="defaultTransition text-verdeEscuro/60 group-hover:text-verdeClaro"
        />
      ),
    },
    {
      label: 'Certificados',
      url: '/',
      icone: (
        <Bookmark
          size={16}
          strokeWidth={2}
          className="defaultTransition text-verdeEscuro/60 group-hover:text-verdeClaro"
        />
      ),
    },
    {
      label: 'Ajuda e feedback',
      url: '/',
      icone: (
        <MessageCircle
          size={16}
          strokeWidth={2}
          className="defaultTransition text-verdeEscuro/60 group-hover:text-verdeClaro"
        />
      ),
    },
  ]
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="group flex select-none flex-row items-center gap-3 outline-none">
        <Image
          src={imagem || defaultImage}
          alt="Imagem de perfil"
          width={32}
          height={32}
          className="h-8 w-8 rounded-full shadow-sm"
        />
        <span className="defaultTransition text-lg font-medium text-branco group-hover:text-verdeClaro">
          {nome.split(' ')[0]}
        </span>
        <ChevronDown
          size={18}
          strokeWidth={2.5}
          className="defaultTransition text-branco group-hover:text-verdeClaro"
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="mt-2 flex w-60 flex-col rounded-lg bg-branco p-4 shadow-lg"
        align="end"
      >
        <div className="flex select-none flex-col gap-0.5 border-b-2 pb-4">
          <p className="truncate text-sm font-medium">{nome}</p>
          <p className="truncate text-xs text-verdeEscuro/60">{email}</p>
        </div>
        <div className="flex flex-col gap-4 border-b-2 py-4">
          {listaOpcoesDropdownMenu.map((option, i) => (
            <Link key={i} href={option.url}>
              <DropdownMenuItem
                key={i}
                className="group flex cursor-pointer flex-row items-center gap-2"
              >
                {option.icone}
                <span className="defaultTransition text-sm group-hover:text-verdeClaro">
                  {option.label}
                </span>
              </DropdownMenuItem>
            </Link>
          ))}
        </div>
        <form action={signOut} className="pt-4">
          <button className="w-full">
            <DropdownMenuItem className="group flex flex-row items-center justify-between gap-4">
              <span className="defaultTransition text-sm font-medium group-hover:text-red-600">
                Sair
              </span>
              <LogOut
                size={16}
                strokeWidth={2}
                className="defaultTransition text-verdeEscuro/60 group-hover:text-red-600"
              />
            </DropdownMenuItem>
          </button>
        </form>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
