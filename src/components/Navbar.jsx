import { Navbar as BsNavbar, Nav, Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <BsNavbar bg="dark" variant="dark" expand="md" sticky="top">
      <Container>
        <BsNavbar.Brand as={NavLink} to="/">Jeremy's Shelf</BsNavbar.Brand>
        <BsNavbar.Toggle aria-controls="main-nav" />
        <BsNavbar.Collapse id="main-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/" end>Home</Nav.Link>
            <Nav.Link as={NavLink} to="/shelf">Shelf</Nav.Link>
            <Nav.Link as={NavLink} to="/bookmarks">Bookmarks</Nav.Link>
          </Nav>
        </BsNavbar.Collapse>
      </Container>
    </BsNavbar>
  )
}

export default Navbar
