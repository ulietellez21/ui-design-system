import { clsx } from 'clsx'
import { CheckCircle, AlertCircle, AlertTriangle, Info, X } from 'lucide-react'
import type { HTMLAttributes, ReactNode } from 'react'

export type AlertVariant = 'info' | 'success' | 'warning' | 'error'

export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  variant?: AlertVariant
  title?: string
  onClose?: () => void
  icon?: ReactNode
}

const config: Record<AlertVariant, { base: string; icon: ReactNode }> = {
  info:    { base: 'bg-primary-50 border-primary-200 text-primary-800',  icon: <Info size={18} /> },
  success: { base: 'bg-success-50 border-green-200 text-green-800',      icon: <CheckCircle size={18} /> },
  warning: { base: 'bg-warning-50 border-yellow-200 text-yellow-800',    icon: <AlertTriangle size={18} /> },
  error:   { base: 'bg-danger-50 border-red-200 text-red-800',           icon: <AlertCircle size={18} /> },
}

export function Alert({ variant = 'info', title, onClose, icon, children, className, ...props }: AlertProps) {
  const { base, icon: defaultIcon } = config[variant]
  return (
    <div role="alert" className={clsx('flex gap-3 p-4 rounded-xl border', base, className)} {...props}>
      <span className="mt-0.5 flex-shrink-0">{icon ?? defaultIcon}</span>
      <div className="flex-1 min-w-0">
        {title && <p className="font-semibold text-sm mb-0.5">{title}</p>}
        {children && <p className="text-sm opacity-90">{children}</p>}
      </div>
      {onClose && (
        <button onClick={onClose} className="flex-shrink-0 opacity-60 hover:opacity-100 transition-opacity">
          <X size={16} />
        </button>
      )}
    </div>
  )
}
