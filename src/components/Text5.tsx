interface Props {
  children: React.ReactNode
  tag?: 'h5' | 'p' | 'span'
  className?: string
}

export default function Text5({ children, tag = 'h5', className }: Props) {
  const Component = tag
  return (
    <Component className={`text-sm 768:text-base 1024:text-lg ${className}`}>
      {children}
    </Component>
  )
}
