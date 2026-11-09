import { useId } from 'react'
import type { InputHTMLAttributes } from 'react'
import './components.css'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string
  state?: 'Default' | 'Focus'
  error?: string
}

export default function Input({ label = 'Your name', placeholder = 'First and last name', state = 'Default', error, className = '', id, ...props }: InputProps) {
  const generatedId = useId()
  const fieldId = id ?? generatedId
  return (
    <div className={`input input--${state.toLowerCase()} ${className}`}>
      <label className="input__label" htmlFor={fieldId}>{label}</label>
      <input {...props} className="input__field" id={fieldId} placeholder={placeholder}
        aria-invalid={error ? true : props['aria-invalid']}
        aria-describedby={[props['aria-describedby'], error ? `${fieldId}-error` : undefined].filter(Boolean).join(' ') || undefined} />
      {error && <p className="input__error" id={`${fieldId}-error`} role="alert">{error}</p>}
    </div>
  )
}
