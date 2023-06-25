import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../../Assets/Styles/Search.css";
import { useState } from "react";
function Search() {
  const [keyword, setKeyword] = useState("");

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid className="searchandcatagory">
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
          <Form className="d-flex homesearch">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />
            <Button variant="outline-success" type="submit">
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Search;
