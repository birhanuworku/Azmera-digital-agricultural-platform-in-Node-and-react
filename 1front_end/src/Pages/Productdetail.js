import React from "react";
import Navebar from "../Components/Common/Navebar";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import Dropdown from "react-bootstrap/Dropdown";
import "../Assets/Styles/productdetail.css";
import { Button } from "react-bootstrap";
function Productdetail({ cartsize, handleClick, warning }) {
  const { id } = useParams();
  const [productname, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setProductDescription] = useState("");
  const [image, setProductImage] = useState("");
  const [product_catagory, setProductcatagory] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    const getSingleProductData = async () => {
      const { data } = await axios.get(`/api/products/${id}`);
      setTitle(data.productname);
      setPrice(data.price);
      setData(data);
      setProductDescription(data.description);
      setProductImage(data.image);
      setProductcatagory(data.product_catagory);
      setQuantity(data.quantity);
    };
    getSingleProductData();
  }, [id]);
console.log(data)
  return (
    <>
      <div>
        <Navebar cartsize={cartsize} />
        <div className="wholediv">
          <div className="dropdown">
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Product Catagory
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">All</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Vigitables</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Firuits</Dropdown.Item>
                <Dropdown.Item href="#/action-1">
                  Meat and Meat Products
                </Dropdown.Item>
                <Dropdown.Item href="#/action-1">Diary Products</Dropdown.Item>
                <Dropdown.Item href="#/action-1">Seeds</Dropdown.Item>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="includingimage">
            <div className="productimage">
              <img
                src={`http://localhost:8000/${image}`}
                alt="No"
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontSize: "16px",
                  background: "",
                  width: "400px",
                }}
              />{" "}
            </div>
            <div className="productinformation">
              <div className="eachinfo">
                <h1>{productname}</h1>
              </div>
              <div className="eachinfo">
                <h4>Catagory : {product_catagory}</h4>
              </div>
              <div className="eachinfo">
                <h4>Price: ${price}</h4>
              </div>
              <div className="eachinfo">
                <h4>Quantity: {quantity}</h4>
              </div>
              <div className="eachinfo">
                <div>
                  <div></div>
                  <div></div>
                </div>
                <Button
                  variant="outline-success"
                  className="cart"
                  key={id}
                  onClick={() => handleClick(data)}
                >
                  Add to Cart
                </Button>
              </div>
            </div>
            <div className="description">
              <h1>Description</h1>
              <div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  fermentum dui ac metus dignissim, at aliquam justo dapibus.
                  Curabitur id lectus non lacus malesuada aliquam. Morbi
                  venenatis faucibus liberoProin pellentesque iaculis tellus,
                  nec lacinia ligula mattis vel. Nulla feugiat leo id aliquam
                  pellentesque. Ut iaculis felis quis neque mattis, at interdum
                  ligula efficitur. Praesent nec lectus mi. Sed feugiat
                  malesuada sapien, nec condimentum ipsum efficitur sed. Sed
                  posuere nunc vitae massa ultricies, at interdum ipsum
                  efficitur.{description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {warning && (
        <div className="warning">Product already exist in the cart</div>
      )}
    </>
  );
}

export default Productdetail;
