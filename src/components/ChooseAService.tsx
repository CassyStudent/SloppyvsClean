import { useState } from 'react'
import ActionBar from './ActionBar'
import ServiceCard from './ServiceCard'
import TopBar from './TopBar'
import './ChooseAService.css'

const services = [
  { id: 'flat-tyre', title: 'Flat tyre repair', description: 'Tube or tyre swap, any wheel size.', price: '€15', duration: '30 min' },
  { id: 'brakes', title: 'Brake check and adjust', description: 'Pads, cables and alignment.', price: '€25', duration: '45 min' },
  { id: 'gears', title: 'Gear tune-up', description: 'Smooth shifting on every gear.', price: '€30', duration: '45 min' },
  { id: 'full-service', title: 'Full service', description: 'Everything checked, cleaned and adjusted.', price: '€89', duration: '2 hours' },
] as const

type Service = typeof services[number]

type ChooseAServiceProps = {
  onContinue?: (service: Service) => void
  onBack?: () => void
}

/** Screen 01 Choose a service, Figma node 7:114. */
export default function ChooseAService({ onContinue, onBack }: ChooseAServiceProps) {
  const [selectedId, setSelectedId] = useState<Service['id']>('flat-tyre')
  const [message, setMessage] = useState('')
  const selectedService = services.find(service => service.id === selectedId) ?? services[0]

  function continueBooking() {
    setMessage(`${selectedService.title} selected (${selectedService.price}).`)
    onContinue?.(selectedService)
  }

  return (
    <main className="choose-service-screen" data-node-id="7:114">
      <TopBar onBack={onBack ?? (() => { window.location.assign('/components') })} />
      <div className="choose-service-screen__content">
        <header className="choose-service-screen__heading">
          <h1>Choose a service</h1>
          <p>What does your bike need?</p>
        </header>
        <section className="choose-service-screen__services" aria-label="Repair services">
          {services.map(service => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              price={service.price}
              duration={service.duration}
              aria-label={service.title}
              state={selectedId === service.id ? 'Selected' : 'Default'}
              onClick={() => { setSelectedId(service.id); setMessage('') }}
            />
          ))}
        </section>
        <p className="choose-service-screen__status" role="status">{message}</p>
      </div>
      <ActionBar label="Continue" onClick={continueBooking} />
    </main>
  )
}
