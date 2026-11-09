import Button from './Button'
import type { ButtonProps } from './Button'
import './components.css'

export default function ActionBar({ className = '', ...buttonProps }: ButtonProps) {
  return <footer className={`action-bar ${className}`}><Button {...buttonProps} /></footer>
}
