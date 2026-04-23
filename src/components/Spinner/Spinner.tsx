import { clsx } from 'clsx'

export type SpinnerSize = 'sm' | 'md' | 'lg' | 'xl'
export type SpinnerVariant = 'primary' | 'white' | 'gray'

export interface SpinnerProps { size?: SpinnerSize; variant?: SpinnerVariant; label?: string }

const sizes: Record<SpinnerSize, string> = { sm: 'w-4 h-4', md: 'w-6 h-6', lg: 'w-8 h-8', xl: 'w-12 h-12' }
const colors: Record<SpinnerVariant, string> = {
  primary: 'border-primary-500 border-t-transparent',
  white: 'border-white border-t-transparent',
  gray: 'border-gray-300 border-t-gray-600',
}

export function Spinner({ size = 'md', variant = 'primary', label }: SpinnerProps) {
  return (
    <div className="inline-flex flex-col items-center gap-2" role="status">
      <div className={clsx('rounded-full border-2 animate-spin', sizes[size], colors[variant])} />
      {label && <span className="text-sm text-gray-500">{label}</span>}
      <span className="sr-only">Cargando...</span>
    </div>
  )
}
