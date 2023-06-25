import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import "../Assets/Styles/News.css";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Navebar from "../Components/Common/Navebar";
function News({ cartsize }) {
  const [allnews, setData] = useState([]);
  useEffect(() => {
    const getallnews = async () => {
      const { data } = await axios.get(`/api/news/getallnew`);
      setData(data);
    };
    getallnews();
  }, []);

  return (
    <div>
      <Navebar cartsize={cartsize} />
      <div className="thewholenew">
        {allnews.map((news) => (
          <Link to={`/news/${news.id}`} style={{ textDecoration: "none" }}>
            <Card className="eachnew">
              <Card.Img variant="top" src={news.image} alt="No image " />
              <Card.Body>
                <Card.Title>{news.title}</Card.Title>
                <Card.Text>{news.content}</Card.Text>
                <Button
                  className="btnn"
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
  );
}

export default News;
