import PrivateLayoutScreen from '@/screens/PrivateLayoutScreen'

interface Props {
  children: React.ReactNode
}

export default function PrivateLayout({ children }: Props) {
  return <PrivateLayoutScreen>{children}</PrivateLayoutScreen>
}
