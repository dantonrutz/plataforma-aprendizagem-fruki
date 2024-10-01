interface Props {
  children: React.ReactNode
  tag?: 'h6' | 'p' | 'span'
  className?: string
}

export default function Text6({ children, tag = 'h6', className }: Props) {
  const Component = tag
  return (
    <Component className={`text-xs 768:text-sm 1024:text-base ${className}`}>
      {children}
    </Component>
  )
}
