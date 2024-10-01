interface Props {
  children: React.ReactNode
  tag?: 'h2' | 'p' | 'span'
  className?: string
}

export default function Text2({ children, tag = 'h2', className }: Props) {
  const Component = tag
  return (
    <Component className={`text-2xl 768:text-3xl 1024:text-4xl ${className}`}>
      {children}
    </Component>
  )
}
