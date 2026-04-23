import { clsx } from 'clsx'
import type { InputHTMLAttributes, ReactNode } from 'react'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  hint?: string
  leftElement?: ReactNode
  rightElement?: ReactNode
}

export function Input({ label, error, hint, leftElement, rightElement, className, id, ...props }: InputProps) {
  const inputId = id || label?.toLowerCase().replace(/\s+/g, '-')
  return (
    <div className="flex flex-col gap-1.5">
      {label && <label htmlFor={inputId} className="text-sm font-medium text-gray-700">{label}</label>}
      <div className="relative flex items-center">
        {leftElement && <span className="absolute left-3 text-gray-400">{leftElement}</span>}
        <input
          id={inputId}
          className={clsx(
            'w-full px-3 py-2 text-sm rounded-lg border bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 disabled:bg-gray-50 disabled:cursor-not-allowed placeholder:text-gray-400',
            error ? 'border-danger-500 focus:ring-danger-500' : 'border-gray-300',
            leftElement && 'pl-9',
            rightElement && 'pr-9',
            className,
          )}
          {...props}
        />
        {rightElement && <span className="absolute right-3 text-gray-400">{rightElement}</span>}
      </div>
      {error && <p className="text-xs text-danger-500">{error}</p>}
      {hint && !error && <p className="text-xs text-gray-500">{hint}</p>}
    </div>
  )
}
