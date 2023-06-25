import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../Assets/Styles/productpage.css";
import { useParams } from "react-router";

import Dropdown from "react-bootstrap/Dropdown";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

function Productpage() {
  const [products, setProducts] = useState([]);
  const { catagory } = useParams();

  useEffect(() => {
    const getProductsData = async () => {
      const url = catagory
        ? `/api/products/bycatagory/${catagory}`
        : "/api/products";
      const { data } = await axios.get(url);
      setProducts(data);
    };
    getProductsData();
  }, [catagory]);

  return (
    <div>
      <div>
        <Navbar bg="light" variant="light">
          <Container>
            <Link to="/All" style={{ textDecoration: "none" }}>
              <Nav.Link href="#contact">All</Nav.Link>
            </Link>
            <Nav className="me-auto">
              <Link to="/Vegitable" style={{ textDecoration: "none" }}>
                <Nav.Link href="#contact">Vegitable</Nav.Link>
              </Link>
              <Link to="/Firuits" style={{ textDecoration: "none" }}>
                <Nav.Link href="#contact">Firuits</Nav.Link>
              </Link>
              <Link
                to="/Meat and Meat Production"
                style={{ textDecoration: "none" }}
              >
                <Nav.Link href="#contact">Meat and Meat Production</Nav.Link>
              </Link>
              <Link to="/Diary Products" style={{ textDecoration: "none" }}>
                <Nav.Link href="#contact">Diary Products</Nav.Link>
              </Link>
              <Link to="/Seeds" style={{ textDecoration: "none" }}>
                <Nav.Link href="#contact">Seeds</Nav.Link>
              </Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
      <div className="dropdownandproduct">
        <div className="catagorydropdown">
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Product Catagory
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="http://localhost:3000/All">
                All
              </Dropdown.Item>{" "}
              <Dropdown.Item href="http://localhost:3000/Vigitables">
                Vigitables
              </Dropdown.Item>
              <Dropdown.Item href="http://localhost:3000/Firuits">
                Firuits
              </Dropdown.Item>
              <Dropdown.Item href="http://localhost:3000/Vigitables/meat">
                Meat and Meat Products
              </Dropdown.Item>
              <Dropdown.Item href="http://localhost:3000/Diary">
                Diary Products
              </Dropdown.Item>
              <Dropdown.Item href="http://localhost:3000/Seeds">
                Seeds
              </Dropdown.Item>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="thewholeproduct">
          {products.map((product) => (
            <Link
              to={`/products/${product.productid}`}
              style={{ textDecoration: "none" }}
            >
              <Card className="eachproduct">
                <Card.Img variant="top" src={product.image} alt="No image " />
                <Card.Body>
                  <Card.Title>{product.productname}</Card.Title>
                  <Card.Text>{product.price}</Card.Text>
                  <Button
                    variant="primary"
                    style={{ backgroundColor: "green" }}
                  >
                    Detail
                  </Button>
                </Card.Body>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Productpage;
