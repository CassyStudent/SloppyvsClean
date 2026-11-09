import type { ButtonHTMLAttributes } from 'react'
import './components.css'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  label?: string
  variant?: 'Primary' | 'Secondary'
}

export default function Button({ label = 'Book this repair', variant = 'Primary', className = '', type = 'button', children, ...props }: ButtonProps) {
  return <button {...props} type={type} className={`button button--${variant.toLowerCase()} ${className}`}>{children ?? label}</button>
}
