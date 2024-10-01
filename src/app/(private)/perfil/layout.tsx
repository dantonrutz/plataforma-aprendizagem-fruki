import PerfilLayoutScreen from '@/screens/PerfilLayoutScreen'

interface Props {
  children: React.ReactNode
}

export default function PrivateLayout({ children }: Props) {
  return <PerfilLayoutScreen>{children}</PerfilLayoutScreen>
}
