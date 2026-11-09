import { useEffect, useState } from 'react'
import Frame47 from './components/Frame47'
import ComponentsOverview from './components/ComponentsOverview'
import ChooseAService from './components/ChooseAService'
import PickASlot from './components/PickASlot'
import Confirm from './components/Confirm'
import type { ContactDetails } from './components/Confirm'
import type { SlotSelection } from './components/PickASlot'
import { services } from './data/services'
import type { Service } from './data/services'
import './App.css'

function App() {
  const [bookingRequested, setBookingRequested] = useState(false)
  const [path, setPath] = useState(window.location.pathname)
  const [service, setService] = useState<Service>(services[0])
  const [slot, setSlot] = useState<SlotSelection>({ day: 'Today', time: '16:30' })
  const [contact, setContact] = useState<ContactDetails>({ name: '', phone: '' })

  useEffect(() => {
    const onPopState = () => setPath(window.location.pathname)
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  function navigate(nextPath: string) {
    window.history.pushState(null, '', nextPath)
    setPath(nextPath)
    window.scrollTo(0, 0)
  }

  if (path === '/components') return <ComponentsOverview />
  if (path === '/confirm') return <Confirm service={service} slot={slot} contact={contact} onContactChange={setContact} onBack={() => navigate('/pick-slot')} />
  if (path === '/pick-slot') return <PickASlot service={service} selection={slot} onSelectionChange={setSlot} onBack={() => navigate('/')} onContinue={() => navigate('/confirm')} />
  if (path !== '/repair') return <ChooseAService initialSelectedId={service.id} onContinue={nextService => { setService(nextService); navigate('/pick-slot') }} onBack={() => navigate('/components')} />
  return (
    <main className="component-preview">
      <Frame47 onBook={() => setBookingRequested(true)} />
      <p className="booking-status" role="status">
        {bookingRequested ? 'Flat tyre repair selected. Next free slot: today at 16:30.' : ''}
      </p>
    </main>
  )
}
export default App
