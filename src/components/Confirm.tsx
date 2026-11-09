import { useId, useState } from 'react'
import type { FormEvent } from 'react'
import ActionBar from './ActionBar'
import Input from './Input'
import SummaryRow from './SummaryRow'
import TopBar from './TopBar'
import type { SlotSelection } from './PickASlot'
import type { Service } from '../data/services'
import './BookingScreen.css'
import './Confirm.css'

export type ContactDetails = { name: string; phone: string }
export type BookingDetails = { service: Service; slot: SlotSelection; contact: ContactDetails }

type ConfirmProps = {
  service: Service
  slot: SlotSelection
  contact: ContactDetails
  onContactChange: (contact: ContactDetails) => void
  onBack: () => void
  onConfirm?: (details: BookingDetails) => void
}

/** Screen 03 Confirm, Figma node 7:128. */
export default function Confirm({ service, slot, contact, onContactChange, onBack, onConfirm }: ConfirmProps) {
  const formId = useId()
  const [message, setMessage] = useState('')

  function confirmDetails(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const nameField = form.elements.namedItem('customerName') as HTMLInputElement
    const phoneField = form.elements.namedItem('phone') as HTMLInputElement
    if (!contact.name.trim()) {
      nameField.setCustomValidity('Enter your name.')
      nameField.reportValidity()
      return
    }
    const phone = contact.phone.trim()
    const digits = phone.replace(/\D/g, '')
    if (!/^\+?[\d\s().-]+$/.test(phone) || digits.length < 7 || digits.length > 15) {
      phoneField.setCustomValidity('Enter a valid phone number, including the country code if needed.')
      phoneField.reportValidity()
      return
    }
    const checkedContact = { name: contact.name.trim(), phone }
    onContactChange(checkedContact)
    onConfirm?.({ service, slot, contact: checkedContact })
    setMessage('Your details are valid. No booking has been sent.')
  }

  return (
    <main className="booking-screen confirm-screen" data-node-id="7:128">
      <TopBar step="Step 3 of 3" onBack={onBack} />
      <form id={formId} className="booking-screen__content" onSubmit={confirmDetails}>
        <header className="booking-screen__heading"><h1>Check and confirm</h1></header>
        <section className="confirm-screen__summary" aria-label="Booking summary">
          <SummaryRow label="Service" value={service.title} />
          <SummaryRow label="Drop-off" value={`${slot.day} at ${slot.time}`} />
          <SummaryRow label="Price" value={`${service.price}, pay at pick-up`} />
        </section>
        <Input label="Your name" name="customerName" autoComplete="name" required maxLength={120} value={contact.name}
          onChange={event => { event.currentTarget.setCustomValidity(''); onContactChange({ ...contact, name: event.currentTarget.value }); setMessage('') }} />
        <Input label="Phone number" placeholder="+32 470 12 34 56" state="Focus" type="tel" inputMode="tel" name="phone" autoComplete="tel" required maxLength={30} value={contact.phone}
          onChange={event => { event.currentTarget.setCustomValidity(''); onContactChange({ ...contact, phone: event.currentTarget.value }); setMessage('') }} />
        <p className="confirm-screen__note">We text you when your bike is ready. You pay when you pick it up.</p>
        <p className="booking-screen__status" role="status">{message}</p>
      </form>
      <ActionBar label="Confirm booking" type="submit" form={formId} />
    </main>
  )
}
