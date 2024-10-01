import { LoaderCircle } from 'lucide-react'

interface Props {
  size: number
  strokeWidth: number
}

export default function LoadingSpinner({ size, strokeWidth }: Props) {
  return (
    <LoaderCircle
      size={size}
      strokeWidth={strokeWidth}
      className="animate-spin"
    />
  )
}
