import { Form, InputGroup } from 'react-bootstrap'

function SearchBar({ value, onChange }) {
  return (
    <Form role="search" onSubmit={(e) => e.preventDefault()}>
      <Form.Label htmlFor="shelf-search" visuallyHidden>
        Search the shelf
      </Form.Label>
      <InputGroup>
        <InputGroup.Text aria-hidden="true">🔎</InputGroup.Text>
        <Form.Control
          id="shelf-search"
          type="search"
          placeholder="Search title, author, or genre…"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </InputGroup>
    </Form>
  )
}

export default SearchBar
