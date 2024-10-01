interface Props {
  children: React.ReactNode
}

export default function PerfilLayoutScreen({ children }: Props) {
  return (
    <div>
      <span>perfil layout</span>
      {children}
    </div>
  )
}
