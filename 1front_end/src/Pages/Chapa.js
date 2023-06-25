import React from "react";
//import ChapaContext from "./ChapaContext";
import { useLocation } from "react-router-dom";
import "../Assets/Styles/chapa.css";
import { v4 as uuidv4 } from "uuid";
import Navebar from "../Components/Common/Navebar";
import { useNavigate } from "react-router-dom";

function Chapa({ cartsize }) {
  const location = useLocation();
  const te_ref = `${location.state.data.firstName}-tx-${uuidv4()}`;
  const public_key = "CHAPUBK_TEST-76G5Ru6k9nIYEy0tD7Wnn4HA7OhhWoFZ";
  const navigate = useNavigate();

  //const verifyUrl = "https://api.chapa.co/v1/transaction/verify/" + te_ref;

  const saveorder = (e) => {
    e.preventDefault();
    alert("You confirmed successfully you can pay now by clicking bellow");
    const data = {
      customer_firstname: location.state.data.firstName,
      customer_lastname: location.state.data.lastName,
      customer_email: location.state.data.email,
      customer_password: location.state.data.password,
      customer_phone_number: location.state.data.phoneNumber,
      customer_address: location.state.data.address,
    };
    console.log(data);
    fetch("http://localhost:8000/api/orders/addorder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          // Handle successful response
          console.log("Order saved successfully");
        } else {
          // Handle error response
          console.error("Failed to save order");
        }
      })
      .catch((error) => {
        // Handle network error
        console.error("Error occurred while saving order:", error);
      });
  };
  const canceleOrder = () => {
    navigate("/");
  };
  return (
    <div>
      <Navebar cartsize={cartsize} />
      <form method="POST" action="https://api.chapa.co/v1/hosted/pay">
        <input type="hidden" name="public_key" value={public_key} />
        <input type="hidden" name="tx_ref" value={te_ref} />
        <input type="hidden" name="amount" value={location.state.data.amount} />
        <input type="hidden" name="currency" value="ETB" />
        <input type="hidden" name="email" value={location.state.data.email} />
        <input
          type="hidden"
          name="first_name"
          value={location.state.data.firstName}
        />
        <input
          type="hidden"
          name="last_name"
          value={location.state.data.lastName}
        />
        <input type="hidden" name="title" value="Let us do this" />
        <input
          type="hidden"
          name="description"
          value="Paying with Confidence with cha"
        />
        <input
          type="hidden"
          name="logo"
          value="https://chapa.link/asset/images/chapa_swirl.svg"
        />
        <input
          type="hidden"
          name="callback_url"
          value="https://example.com/callbackurl"
        />
        <input
          type="hidden"
          name="return_url"
          value="http://localhost:3000/success"
        />
        <input type="hidden" name="meta[title]" value="test" />
        <button type="submit" className="chapabutton">
          Pay Now
        </button>
      </form>
      <div className="chapa">
        <div className="detail">
          <h2>Order detail</h2>
        </div>
        <h5> First Name: {location.state.data.firstName} </h5>
        <h5> Last Name: {location.state.data.lastName} </h5>
        <h5> Phone Number: {location.state.data.phoneNumber} </h5>
        <h5> Address: {location.state.data.address} </h5>
        <h5> EmailAddress: {location.state.data.email} </h5>
        <h5> Amount in ETB: {location.state.data.amount} </h5>
        <button type="submit" className="confirmorder" onClick={saveorder}>
          Confirm order
        </button>
        <button type="submit" className="confirmorder" onClick={canceleOrder}>
          Cancele Order
        </button>
      </div>
    </div>
  );
}

export default Chapa;
