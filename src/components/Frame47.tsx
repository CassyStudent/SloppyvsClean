import './Frame47.css'
import Button from './Button'
import Tag from './Tag'

type Frame47Props = { onBook: () => void }

/** Flat tyre repair card from Figma Frame 47, node 4:6. */
export default function Frame47({ onBook }: Frame47Props) {
  return (
    <article className="frame47" aria-label="Flat tyre repair" data-node-id="4:6">
      <header className="frame47__header">
        <h2 className="frame47__title">Flat tyre repair</h2>
        <p className="frame47__description">Tube or tyre swap, any wheel size.</p>
      </header>
      <div className="frame47__details">
        <ul className="frame47__badges" aria-label="Repair details">
          <li><Tag className="frame47__badge frame47__badge--duration" /></li>
          <li><Tag label="All bikes" className="frame47__badge frame47__badge--bikes" /></li>
        </ul>
        <p className="frame47__price">€15</p>
      </div>
      <p className="frame47__availability">Next free slot: today at 16:30</p>
      <Button className="frame47__book" onClick={onBook} />
    </article>
  )
}
