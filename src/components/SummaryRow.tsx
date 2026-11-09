import './components.css'

export default function SummaryRow({ label = 'Service', value = 'Flat tyre repair', className = '' }: { label?: string; value?: string; className?: string }) {
  return <div className={`summary-row ${className}`}><span className="summary-row__label">{label}</span><span className="summary-row__value">{value}</span></div>
}
