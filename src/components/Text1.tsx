interface Props {
  children: React.ReactNode
  tag?: 'h1' | 'p' | 'span'
  className?: string
}

export default function Text1({ children, tag = 'h1', className }: Props) {
  const Component = tag
  return (
    <Component className={`text-3xl 768:text-4xl 1024:text-5xl ${className}`}>
      {children}
    </Component>
  )
}
