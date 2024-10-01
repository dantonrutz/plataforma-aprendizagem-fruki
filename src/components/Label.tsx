interface Props {
  htmlFor: string
  children: React.ReactNode
  className?: string
}

export default function Label({ htmlFor, children, className }: Props) {
  return (
    <label
      htmlFor={htmlFor}
      className={`cursor-pointer whitespace-nowrap font-bold text-verdeEscuro ${className}`}
    >
      {children}
    </label>
  )
}
