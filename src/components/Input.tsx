import { EyeOff, Eye } from 'lucide-react'
import { useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { get } from 'lodash'
import Label from '@/components/Label'

interface Props {
  name: string
  label: string
  type?: string
  placeholder?: string
  className?: string
}

export default function Input({
  name,
  label,
  type,
  placeholder,
  className,
}: Props) {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="flex w-full flex-col gap-2">
      <div className="flex flex-row items-center justify-between gap-4 px-2">
        <Label htmlFor={name} className={className}>
          {label}
        </Label>
        {get(errors, name) && (
          <p
            aria-live="polite"
            className="text-end text-sm text-red-600"
          >{`${get(errors, name)?.message}`}</p>
        )}
      </div>
      {type === 'password' ? (
        <div className="relative flex flex-row">
          <input
            {...register(name)}
            type={showPassword ? 'text' : 'password'}
            id={name}
            name={name}
            placeholder={placeholder || ''}
            className={`w-full rounded-lg border-2 border-cinza bg-transparent px-2 py-1 text-verdeEscuro placeholder-slate-400 outline-verdeEscuro ${get(errors, name)?.message && 'outline-red-600 placeholder:text-red-600/60'}`}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="defaultTransition absolute right-3 top-2 cursor-pointer text-slate-400 hover:text-verdeEscuro focus:outline-2"
          >
            {showPassword ? (
              <EyeOff size={20} strokeWidth={2} className="text-verdeEscuro" />
            ) : (
              <Eye size={20} strokeWidth={2} />
            )}
          </button>
        </div>
      ) : (
        <input
          {...register(name)}
          type={type || 'text'}
          id={name}
          name={name}
          placeholder={placeholder || ''}
          className={`rounded-lg border-2 border-cinza bg-transparent px-2 py-1 text-verdeEscuro placeholder-slate-400 outline-verdeEscuro ${get(errors, name)?.message && 'outline-red-600 placeholder:text-red-600/60'}`}
        />
      )}
    </div>
  )
}
