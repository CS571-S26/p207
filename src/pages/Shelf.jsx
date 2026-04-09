import items from '../data/items.js'
import ShelfRow from '../components/ShelfRow.jsx'

function Shelf() {
  return (
    <>
      <h1 className="mb-4">The Shelf</h1>
      <ShelfRow items={items} label="All items" />
    </>
  )
}

export default Shelf
