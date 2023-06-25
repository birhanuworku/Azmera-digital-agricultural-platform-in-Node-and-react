import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../../Assets/Styles/navebar.css";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

function Navebar({ cartsize }) {
  return (
    <Navbar bg="light" expand="lg" className="navebar">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" style={{ textDecoration: "none" }}>
              <Nav.Link href="#news">Logo</Nav.Link>
            </Link>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Nav.Link href="#news">Home</Nav.Link>
            </Link>
            <Link to="/news" style={{ textDecoration: "none" }}>
              <Nav.Link href="#news">News</Nav.Link>
            </Link>

            <Link to="/aboutus" style={{ textDecoration: "none" }}>
              <Nav.Link href="#contact">About Us</Nav.Link>
            </Link>
            <Link to="/contactus" style={{ textDecoration: "none" }}>
              <Nav.Link href="#contact">Contact Us</Nav.Link>
            </Link>
            <NavDropdown title="Login/Signup" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                as a farmer
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                as a worker
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">as a labor</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                as a transporter
              </NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>

            <Link
              to="/cart"
              style={{
                textDecoration: "none",
                color: "black",
                fontSize: "16px",
                background: "",
              }}
            >
              <Nav.Link href="#news" className="cart">
                <FaShoppingCart />
                <sup
                  style={{
                    fontSize: "15px",
                    color: "white",
                    backgroundColor: "red",
                    borderRadius: "40%",
                    padding: "3px",
                  }}
                >
                  {cartsize}
                </sup>
              </Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navebar;
