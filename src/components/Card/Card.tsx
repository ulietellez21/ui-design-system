import { clsx } from 'clsx'
import type { HTMLAttributes } from 'react'

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  padding?: 'none' | 'sm' | 'md' | 'lg'
  shadow?: boolean
  hoverable?: boolean
}

export function Card({ padding = 'md', shadow = false, hoverable = false, children, className, ...props }: CardProps) {
  return (
    <div className={clsx(
      'bg-white rounded-2xl border border-gray-100',
      padding === 'sm' && 'p-4', padding === 'md' && 'p-6', padding === 'lg' && 'p-8',
      shadow && 'shadow-md',
      hoverable && 'transition-shadow hover:shadow-lg cursor-pointer',
      className
    )} {...props}>
      {children}
    </div>
  )
}

export function CardHeader({ children, className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={clsx('mb-4', className)} {...props}>{children}</div>
}

export function CardTitle({ children, className, ...props }: HTMLAttributes<HTMLHeadingElement>) {
  return <h3 className={clsx('text-lg font-semibold text-gray-900', className)} {...props}>{children}</h3>
}

export function CardDescription({ children, className, ...props }: HTMLAttributes<HTMLParagraphElement>) {
  return <p className={clsx('text-sm text-gray-500 mt-1', className)} {...props}>{children}</p>
}

export function CardContent({ children, className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={clsx('', className)} {...props}>{children}</div>
}

export function CardFooter({ children, className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={clsx('mt-4 pt-4 border-t border-gray-100 flex items-center', className)} {...props}>{children}</div>
}

Card.Header = CardHeader
Card.Title = CardTitle
Card.Description = CardDescription
Card.Content = CardContent
Card.Footer = CardFooter
