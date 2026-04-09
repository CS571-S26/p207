import { useParams } from 'react-router-dom'

function ItemDetailPage() {
  const { id } = useParams()
  return <h1>Item Detail: {id}</h1>
}

export default ItemDetailPage
