import { Row, Col } from 'react-bootstrap'
import ShelfItem from './ShelfItem.jsx'

function BookmarkList({ items }) {
  return (
    <Row xs={2} sm={3} md={4} lg={5} className="g-3" role="list">
      {items.map((item) => (
        <Col key={item.id} role="listitem">
          <ShelfItem item={item} />
        </Col>
      ))}
    </Row>
  )
}

export default BookmarkList
