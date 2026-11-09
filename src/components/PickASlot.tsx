import { useState } from 'react'
import ActionBar from './ActionBar'
import TimeSlot from './TimeSlot'
import TopBar from './TopBar'
import { services } from '../data/services'
import type { Service } from '../data/services'
import './BookingScreen.css'
import './PickASlot.css'

const days = ['Today', 'Tomorrow', 'Mon 16'] as const
const times = ['09:00', '10:30', '12:00', '14:00', '16:30', '17:30'] as const
export type SlotSelection = { day: typeof days[number]; time: typeof times[number] }

type PickASlotProps = {
  service?: Service
  selection: SlotSelection
  onSelectionChange: (selection: SlotSelection) => void
  onBack: () => void
  onContinue?: (selection: SlotSelection) => void
}

/** Screen 02 Pick a slot, Figma node 7:121. */
export default function PickASlot({ service = services[0], selection, onSelectionChange, onBack, onContinue }: PickASlotProps) {
  const [message, setMessage] = useState('')

  function select(next: SlotSelection) {
    onSelectionChange(next)
    setMessage('')
  }

  function continueBooking() {
    setMessage(`${service.title}: ${selection.day} at ${selection.time} selected.`)
    onContinue?.(selection)
  }

  return (
    <main className="booking-screen pick-slot-screen" data-node-id="7:121">
      <TopBar step="Step 2 of 3" onBack={onBack} />
      <div className="booking-screen__content">
        <header className="booking-screen__heading">
          <h1>Pick a drop-off time</h1>
          <p>{service.title}, about {service.duration.replace(' min', ' minutes')}</p>
        </header>
        <section className="pick-slot-screen__group" aria-labelledby="day-label">
          <h2 id="day-label">Day</h2>
          <div className="pick-slot-screen__options">
            {days.map((day, index) => (
              <TimeSlot key={day} label={day} className={`pick-slot-screen__day--${index}`} state={selection.day === day ? 'Selected' : 'Default'} onClick={() => select({ ...selection, day })} />
            ))}
          </div>
        </section>
        <section className="pick-slot-screen__group" aria-labelledby="time-label">
          <h2 id="time-label">Drop-off time</h2>
          <div className="pick-slot-screen__options">
            {times.map((time, index) => (
              <TimeSlot key={time} label={time} className={`pick-slot-screen__time--${index}`} state={index < 2 ? 'Disabled' : selection.time === time ? 'Selected' : 'Default'} onClick={() => select({ ...selection, time })} />
            ))}
          </div>
        </section>
        <p className="pick-slot-screen__note">Ready the same day. We text you when your bike is done.</p>
        <p className="booking-screen__status" role="status">{message}</p>
      </div>
      <ActionBar label="Continue" onClick={continueBooking} />
    </main>
  )
}
