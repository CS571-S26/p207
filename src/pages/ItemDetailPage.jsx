import { Link, useParams } from 'react-router-dom'
import items from '../data/items.js'
import ItemDetail from '../components/ItemDetail.jsx'

function ItemDetailPage() {
  const { id } = useParams()
  const item = items.find((x) => x.id === id)

  if (!item) {
    return (
      <div className="py-5 text-center">
        <h1 className="h3">Not on the shelf</h1>
        <p className="text-muted">No item with id <code>{id}</code>.</p>
        <Link to="/shelf" className="btn btn-outline-dark mt-2">
          ← Back to shelf
        </Link>
      </div>
    )
  }

  return <ItemDetail item={item} />
}

export default ItemDetailPage
