import chevronLeft from '../assets/icons/chevron-left.svg'
import './components.css'

type TopBarProps = { title?: string; step?: string; onBack: () => void; className?: string }

export default function TopBar({ title = 'Book a repair', step = 'Step 1 of 3', onBack, className = '' }: TopBarProps) {
  return (
    <header className={`top-bar ${className}`}>
      <button type="button" className="top-bar__back" aria-label="Go back" onClick={onBack}>
        <img src={chevronLeft} alt="" />
      </button>
      <h2 className="top-bar__title">{title}</h2>
      <p className="top-bar__step">{step}</p>
    </header>
  )
}
