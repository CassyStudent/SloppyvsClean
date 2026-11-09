import type { ButtonHTMLAttributes } from 'react'
import Tag from './Tag'
import './components.css'

type ServiceCardProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  title?: string
  description?: string
  price?: string
  duration?: string
  state?: 'Default' | 'Selected'
}

export default function ServiceCard({ title = 'Flat tyre repair', description = 'Tube or tyre swap, any wheel size.', price = '€15', duration = '30 min', state = 'Default', className = '', type = 'button', ...props }: ServiceCardProps) {
  return (
    <button {...props} type={type} aria-pressed={state === 'Selected'} className={`service-card service-card--${state.toLowerCase()} ${className}`}>
      <span className="service-card__header"><span>{title}</span><span>{price}</span></span>
      <span className="service-card__description">{description}</span>
      <Tag label={duration} />
    </button>
  )
}
