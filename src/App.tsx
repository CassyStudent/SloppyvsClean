import { useState } from 'react'
import Frame47 from './components/Frame47'
import ComponentsOverview from './components/ComponentsOverview'
import './App.css'

function App() {
  const [bookingRequested, setBookingRequested] = useState(false)
  if (window.location.pathname !== '/repair') return <ComponentsOverview />
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
