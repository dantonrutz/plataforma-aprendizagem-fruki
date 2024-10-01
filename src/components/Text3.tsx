interface Props {
  children: React.ReactNode
  tag?: 'h3' | 'p' | 'span'
  className?: string
}

export default function Text3({ children, tag = 'h3', className }: Props) {
  const Component = tag
  return (
    <Component className={`text-lg 768:text-xl 1024:text-2xl ${className}`}>
      {children}
    </Component>
  )
}
