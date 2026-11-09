import { useState } from 'react'
import ActionBar from './ActionBar'
import Button from './Button'
import Input from './Input'
import ServiceCard from './ServiceCard'
import SummaryRow from './SummaryRow'
import Tag from './Tag'
import TimeSlot from './TimeSlot'
import TopBar from './TopBar'
import './ComponentsOverview.css'

/** Component specimens in the same order and positions as Figma section 3:25. */
export default function ComponentsOverview() {
  const [selectedSlot, setSelectedSlot] = useState(1)
  const [selectedService, setSelectedService] = useState(1)
  const [message, setMessage] = useState('')

  function reset() {
    setSelectedSlot(1)
    setSelectedService(1)
    setMessage('Component selections reset.')
  }

  return (
    <main className="components-overview" aria-label="Spoke components" data-node-id="3:25">
      <section className="component-specimens" aria-label="Button">
        <Button onClick={() => setMessage('Repair selected.')} />
        <Button variant="Secondary" onClick={reset} />
      </section>
      <section className="component-specimen" aria-label="Tag"><Tag /></section>
      <section className="component-specimens" aria-label="Time slot">
        <TimeSlot state={selectedSlot === 0 ? 'Selected' : 'Default'} onClick={() => setSelectedSlot(0)} />
        <TimeSlot state={selectedSlot === 1 ? 'Selected' : 'Default'} onClick={() => setSelectedSlot(1)} />
        <TimeSlot state="Disabled" />
      </section>
      <section className="component-specimens component-specimens--inputs" aria-label="Input">
        <Input aria-label="Your name, default example" />
        <Input state="Focus" aria-label="Your name, focus example" />
      </section>
      <TopBar onBack={reset} />
      <section className="component-specimens component-specimens--services" aria-label="Service card">
        <ServiceCard state={selectedService === 0 ? 'Selected' : 'Default'} onClick={() => setSelectedService(0)} />
        <ServiceCard state={selectedService === 1 ? 'Selected' : 'Default'} onClick={() => setSelectedService(1)} />
      </section>
      <SummaryRow />
      <ActionBar onClick={() => setMessage('Flat tyre repair selected for 16:30.')} />
      <p className="visually-hidden" role="status">{message}</p>
    </main>
  )
}
