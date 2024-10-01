interface Props {
  children: React.ReactNode
  tag?: 'h4' | 'p' | 'span'
  className?: string
}

export default function Text4({ children, tag = 'h4', className }: Props) {
  const Component = tag
  return (
    <Component className={`text-base 768:text-lg 1024:text-xl ${className}`}>
      {children}
    </Component>
  )
}
