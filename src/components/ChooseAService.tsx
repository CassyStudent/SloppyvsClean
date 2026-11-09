import { useState } from 'react'
import ActionBar from './ActionBar'
import ServiceCard from './ServiceCard'
import TopBar from './TopBar'
import { services } from '../data/services'
import type { Service } from '../data/services'
import './BookingScreen.css'
import './ChooseAService.css'

type ChooseAServiceProps = {
  initialSelectedId?: Service['id']
  onContinue?: (service: Service) => void
  onBack?: () => void
}

/** Screen 01 Choose a service, Figma node 7:114. */
export default function ChooseAService({ initialSelectedId = 'flat-tyre', onContinue, onBack }: ChooseAServiceProps) {
  const [selectedId, setSelectedId] = useState<Service['id']>(initialSelectedId)
  const [message, setMessage] = useState('')
  const selectedService = services.find(service => service.id === selectedId) ?? services[0]

  function continueBooking() {
    setMessage(`${selectedService.title} selected (${selectedService.price}).`)
    onContinue?.(selectedService)
  }

  return (
    <main className="booking-screen choose-service-screen" data-node-id="7:114">
      <TopBar onBack={onBack ?? (() => { window.location.assign('/components') })} />
      <div className="booking-screen__content">
        <header className="booking-screen__heading">
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
        <p className="booking-screen__status" role="status">{message}</p>
      </div>
      <ActionBar label="Continue" onClick={continueBooking} />
    </main>
  )
}
