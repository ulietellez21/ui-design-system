import { clsx } from 'clsx'
import type { HTMLAttributes } from 'react'

export type BadgeVariant = 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'outline'

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant
  dot?: boolean
}

const variants: Record<BadgeVariant, string> = {
  default: 'bg-gray-100 text-gray-700',
  primary: 'bg-primary-100 text-primary-700',
  success: 'bg-success-50 text-success-700',
  warning: 'bg-warning-50 text-warning-700',
  danger: 'bg-danger-50 text-danger-700',
  outline: 'border border-gray-300 text-gray-600',
}

const dotColors: Record<BadgeVariant, string> = {
  default: 'bg-gray-400', primary: 'bg-primary-500',
  success: 'bg-success-500', warning: 'bg-warning-500',
  danger: 'bg-danger-500', outline: 'bg-gray-400',
}

export function Badge({ variant = 'default', dot = false, children, className, ...props }: BadgeProps) {
  return (
    <span className={clsx('inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium', variants[variant], className)} {...props}>
      {dot && <span className={clsx('w-1.5 h-1.5 rounded-full', dotColors[variant])} />}
      {children}
    </span>
  )
}
