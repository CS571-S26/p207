import { Row, Col } from 'react-bootstrap'
import items from '../data/items.js'
import ShelfItem from './ShelfItem.jsx'

function CurrentlyConsuming() {
  const inProgress = items.filter((item) => item.status && item.status !== 'finished')

  return (
    <section className="mb-5" aria-labelledby="currently-heading">
      <h2 id="currently-heading" className="h3 mb-3" style={{ fontFamily: 'Georgia, serif' }}>
        Right now, I'm looking at...
      </h2>

      {inProgress.length > 0 ? (
        <Row xs={1} sm={2} md={3} className="g-3">
          {inProgress.map((item) => (
            <Col key={item.id}>
              <ShelfItem item={item} />
            </Col>
          ))}
        </Row>
      ) : (
        <p className="text-muted">
          nothing at the moment! Check back soon.
        </p>
      )}
    </section>
  )
}

export default CurrentlyConsuming
