import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../../Assets/Styles/navebar.css";
import { Link } from "react-router-dom";

function Navebar() {
  return (
    <Navbar bg="light" expand="lg" className="navebar">
      <Container>
        <Navbar.Brand href="#home">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Link to="/news" style={{ textDecoration: "none" }}>
              <Nav.Link href="#news">News</Nav.Link>
            </Link>
            <NavDropdown title="Farmers Kit" id="basic-nav-dropdown">
              <Link to="/fertilizer" style={{ textDecoration: "none" }}>
                {" "}
                <NavDropdown.Item href="#action/3.1">
                  Fertilizer
                </NavDropdown.Item>{" "}
              </Link>
              <Link to="/compost" style={{ textDecoration: "none" }}>
                <NavDropdown.Item href="#action/3.1">Compost</NavDropdown.Item>
              </Link>
              <Link to="/organic_fertilizer" style={{ textDecoration: "none" }}>
                {" "}
                <NavDropdown.Item href="#action/3.1">
                  Organic fertilizer
                </NavDropdown.Item>
              </Link>
              <Link to="/urea_fertilizer" style={{ textDecoration: "none" }}>
                <NavDropdown.Item href="#action/3.1">
                  Urea fertilizer
                </NavDropdown.Item>{" "}
              </Link>

              <Link
                to="/chemical_fertilizer"
                style={{ textDecoration: "none" }}
              >
                {" "}
                <NavDropdown.Item href="#action/3.1">
                  Chemical fertilizer
                </NavDropdown.Item>{" "}
              </Link>
              <Link to="/biofertilizer" style={{ textDecoration: "none" }}>
                {" "}
                <NavDropdown.Item href="#action/3.1">
                  Biofertilizer
                </NavDropdown.Item>
              </Link>
              <Link to="/biofertilizer" style={{ textDecoration: "none" }}>
                <NavDropdown.Item href="#action/3.2">
                  Machineries and Equipments
                </NavDropdown.Item>
              </Link>
              <NavDropdown.Divider />
            </NavDropdown>

            <Link to="/aboutus" style={{ textDecoration: "none" }}>
              <Nav.Link href="#contact">About Us</Nav.Link>
            </Link>
            <Link to="/contactus" style={{ textDecoration: "none" }}>
              <Nav.Link href="#contact">Contact Us</Nav.Link>
            </Link>

            <NavDropdown title="My Account" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                My Profiele
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Farm Sales Report
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Farm Kit Reprt
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Hire detail
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Logout</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navebar;
