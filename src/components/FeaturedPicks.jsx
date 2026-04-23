import { Row, Col } from 'react-bootstrap'
import items from '../data/items.js'
import ShelfItem from './ShelfItem.jsx'

const FEATURED_IDS = ['006', '009', '010', '016']

function FeaturedPicks() {
  const picks = FEATURED_IDS
    .map((id) => items.find((item) => item.id === id))
    .filter(Boolean)

  if (picks.length === 0) return null

  return (
    <section className="mb-5" aria-labelledby="featured-heading">
      <h2 id="featured-heading" className="h3 mb-3" style={{ fontFamily: 'Georgia, serif' }}>
        Featured picks
      </h2>
      <Row xs={2} sm={2} md={4} className="g-3">
        {picks.map((item) => (
          <Col key={item.id}>
            <ShelfItem item={item} />
          </Col>
        ))}
      </Row>
    </section>
  )
}

export default FeaturedPicks
