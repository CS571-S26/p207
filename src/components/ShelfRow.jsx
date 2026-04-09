import { Row, Col } from 'react-bootstrap'
import ShelfItem from './ShelfItem.jsx'

function ShelfRow({ items, label }) {
  return (
    <section className="shelf-row mb-5" aria-label={label}>
      {label && <h2 className="h4 mb-3">{label}</h2>}
      <Row xs={2} sm={3} md={4} lg={5} className="g-3">
        {items.map((item) => (
          <Col key={item.id}>
            <ShelfItem item={item} />
          </Col>
        ))}
      </Row>
      <div
        className="shelf-row__plank"
        aria-hidden="true"
        style={{
          height: '8px',
          marginTop: '0.5rem',
          background: 'linear-gradient(180deg, #8b5a2b, #5c3a1e)',
          borderRadius: '2px',
          boxShadow: '0 2px 6px rgba(0,0,0,0.25)',
        }}
      />
    </section>
  )
}

export default ShelfRow
