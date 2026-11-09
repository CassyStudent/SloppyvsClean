import './components.css'

export default function Tag({ label = '30 min', className = '' }: { label?: string; className?: string }) {
  return <span className={`tag ${className}`}>{label}</span>
}
