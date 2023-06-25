import React, { useState, useEffect } from "react";
import Navebar from "../Components/Common/Navebar";
import "../Assets/Styles/Newsdetail.css";
import { useParams } from "react-router";
import axios from "axios";
function Newsdetail({ cartsize }) {
  const { id } = useParams();
  const [onenewdata, setOnenewdata] = useState([]);
  /*const [productname, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setProductDescription] = useState("");
  const [image, setProductImage] = useState("");
  const [product_catagory, setProductcatagory] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [data, setData] = useState([]);*/
  useEffect(() => {
    const getsinglenews = async () => {
      const { data } = await axios.get(`/api/news/${id}`);
      setOnenewdata(data);
    };
    getsinglenews();
  }, [id]);

  return (
    <div>
      <Navebar cartsize={cartsize} />
      <div className="thewhole">
        <div className="forimg">
          <img
            src={`http://localhost:8000/${onenewdata.image}`}
            alt="No"
            style={{
              textDecoration: "none",
              color: "black",
              fontSize: "16px",
              background: "",
              width: "400px",
            }}
          />
        </div>
        <div className="fordes">
          <div className="de">Detail</div>
          <div>
            <p className="pp">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              fermentum dui ac metus dignissim, at aliquam justo dapibus.
              Curabitur id lectus non lacus malesuada aliquam. Morbi venenatis
              faucibus liberoProin pellentesque iaculis tellus, nec lacinia
              ligula mattis vel. Nulla feugiat leo id aliquam pellentesque. Ut
              iaculis felis quis neque mattis, at interdum ligula efficitur.
              Praesent nec lectus mi. Sed feugiat malesuada sapien, nec
              condimentum ipsum efficitur sed. Sed posuere nunc vitae massa
              ultricies, at interdum ipsum efficitur.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newsdetail;
