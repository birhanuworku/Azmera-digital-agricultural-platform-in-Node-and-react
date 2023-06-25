import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import News from "./Pages/News";
import Contactus from "./Pages/Contact";
import Aboutus from "./Pages/Aboutus";
import Checkout from "./Pages/Checkout";
import Farmerskit from "./Pages/Farmerskit";
import Cart from "./Pages/Cart";
import Farmerdashboard from "./Pages/farmerdashboard/Farmerdashboard";
import Productdetail from "./Pages/Productdetail";
import Chapa from "./Pages/Chapa";
import { useState, useEffect } from "react";
import Success from "./Pages/Success";
import ChapaContext from "./Pages/ChapaContext";
import Login from "./Pages/Login";
import Newsdetail from "./Pages/Newsdetail";
import Admindashboard from "./Pages/Admindashboard";
function App() {
  const [cart, setCart] = useState([]);
  const [url, setUrl] = useState("");

  const [warning, setWarning] = useState(false);
  const handleurl = (verifyUrl) => {
    console.log(verifyUrl);
    setUrl(verifyUrl);
  };
  const handleClick = (data) => {
    let ispresent = false;
    cart.map((product) => {
      if (product.productid === data.productid) ispresent = true;
    });
    if (ispresent) {
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      }, 2000);
      return;
    }

    setCart([...cart, data]);
  };

  const handleChange = (item, d) => {
    let ind = -1;
    cart.forEach((data, index) => {
      if (data.productid === item.productid) ind = index;
    });
    const tempArr = cart;
    tempArr[ind].firstamountincart += d;

    if (tempArr[ind].firstamountincart === 0)
      tempArr[ind].firstamountincart = 1;
    setCart([...tempArr]);
  };

  return (
    <div className="App">
      <Router>
        <ChapaContext.Provider value={url}>
          <Routes>
            <Route
              path="/:catagory"
              element={<Home cartsize={cart.length} />}
            />
            <Route path="/admindashboard" element={<Admindashboard />} />
            <Route path="/" element={<Home cartsize={cart.length} />} />
            <Route path="/news" element={<News cartsize={cart.length} />} />
            <Route
              path="/contactus"ss
              element={<Contactus cartsize={cart.length} />}
            />
            <Route path="/aboutus" element={<Aboutus />} />
            <Route path="/success" element={<Success />} />
            <Route path="/login" element={<Login cartsize={cart.length} />} />
            <Route
              path="/news/:id"
              element={<Newsdetail cartsize={cart.length} />}
            />

            <Route path="/compost" element={<Farmerskit />} />
            <Route path="/organic_fertilizer" element={<Farmerskit />} />
            <Route path="/urea_fertilizer" element={<Farmerskit />} />
            <Route path="/chemical_fertilizer" element={<Farmerskit />} />
            <Route path="/Biofertilizer" element={<Farmerskit />} />
            <Route path="/machineries" element={<Farmerskit />} />
            <Route
              path="/chapa"
              element={<Chapa cartsize={cart.length} handleurl={handleurl} />}
            />

            <Route
              path="/checkout"
              element={
                <Checkout
                  cartsize={cart.length}
                  cart={cart}
                  handleChange={handleChange}
                />
              }
            />

            <Route
              path="/cart"
              element={
                <Cart
                  cart={cart}
                  setCart={setCart}
                  handleChange={handleChange}
                  cartsize={cart.length}
                />
              }
            />

            <Route path="/farmerdashboard" element={<Farmerdashboard />} />
            <Route
              path="/products/:id"
              element={
                <Productdetail
                  cartsize={cart.length}
                  handleClick={handleClick}
                  warning={warning}
                />
              }
            />
          </Routes>
        </ChapaContext.Provider>
      </Router>
    </div>
  );
}

export default App;
