import { useFormContext } from 'react-hook-form'
import LoadingSpinner from '@/components/LoadingSpinner'

interface Props {
  label: string
  className?: string
}

export default function Button({ label, className }: Props) {
  const {
    formState: { errors, isSubmitting },
  } = useFormContext()

  const hasErrors = Object.keys(errors).length > 0

  return (
    <button
      type="submit"
      disabled={hasErrors && isSubmitting}
      className={`defaultTransition mt-2 flex items-center justify-center rounded-lg bg-verdeEscuro py-2 font-semibold text-white hover:bg-verdeClaro ${className}`}
    >
      {isSubmitting ? <LoadingSpinner size={24} strokeWidth={2} /> : label}
    </button>
  )
}
