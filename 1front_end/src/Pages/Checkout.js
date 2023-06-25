import React from "react";
import "../Assets/Styles/checkout.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Navebar from "../Components/Common/Navebar";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
//import Cart from "./Cart";
//import Chapa from "./Chapa";
const schema = yup.object().shape({
  firstName: yup.string().required("First Name should be required please"),
  lastName: yup.string().required("Last Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(4, "Password should be at least 4 characters")
    .max(15, "Password should be at most 15 characters")
    .required("Password is required"),
  phoneNumber: yup.string().required("Phone Number is required"),
  address: yup.string().required("Address is required"),
  amount: yup.number().positive().required(),

  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

function Checkout({ cartsize, cart, handleChange }) {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submitForm = (data) => {
    console.log(data);
    navigate("/chapa", { state: { data } });
  };
  const [price, setPrice] = useState(0);
  const [pricewithservicefee, setPricewithcervucefee] = useState(0);
  const [servicefee, setServicefee] = useState(0);

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.firstamountincart * item.price));
    setPrice(ans);
    setServicefee((ans * 15) / 100);
    setPricewithcervucefee(ans + (ans * 15) / 100);
  };
  useEffect(() => {
    handlePrice();
  });
  return (
    <>
      <Navebar cartsize={cartsize} />
      <div className="all">
        <div className="forcartimage">
          {cart.map((item) => (
            <div className="cart_box" key={item.productid}>
              <div className="cart_img">
                <img src={item.image} alt="" />
                <p className="textcolor">{item.productname}</p>
              </div>
              <div>
                <span className="textcolor">
                  Amount in the cart: {item.firstamountincart}
                </span>{" "}
                <br />
                <span className="textcolor"> Single price : {item.price}</span>
                <br />
                <span className="textcolor">
                  Total price of this item :{" "}
                  {item.price * item.firstamountincart}
                </span>
              </div>
            </div>
          ))}
          <div className="total">
            <span>
              Items Price - {price} <br />
              service Fee(15%)-{servicefee} <br />
              Total- {pricewithservicefee}
            </span>
          </div>
        </div>

        <div className="fororderdetail">
          <div className="Form">
            <div className="title textcolor">Order Information</div>
            <div className="inputs">
              <form onSubmit={handleSubmit(submitForm)}>
                <input
                  type="text"
                  name="firstName"
                  {...register("firstName")}
                  placeholder="First Name..."
                />
                {errors.firstName && (
                  <p className="checkoutp">{errors.firstName.message}</p>
                )}
                <input
                  type="text"
                  name="lastName"
                  {...register("lastName")}
                  placeholder="Last Name..."
                />
                {errors.lastName && (
                  <p className="checkoutp">{errors.lastName.message}</p>
                )}
                <input
                  type="text"
                  name="email"
                  {...register("email")}
                  placeholder="Email..."
                />
                {errors.email && (
                  <p className="checkoutp">{errors.email.message}</p>
                )}
                <input
                  type="text"
                  name="phoneNumber"
                  {...register("phoneNumber")}
                  placeholder="Phone Number..."
                />
                {errors.phoneNumber && (
                  <p className="checkoutp">{errors.phoneNumber.message}</p>
                )}
                <input
                  type="password"
                  name="password"
                  {...register("password")}
                  placeholder="Password..."
                />
                {errors.password && (
                  <p className="checkoutp">{errors.password.message}</p>
                )}
                <input
                  type="password"
                  name="confirmPassword"
                  {...register("confirmPassword")}
                  placeholder="Confirm Password..."
                />
                {errors.confirmPassword && (
                  <p className="checkoutp">{errors.confirmPassword.message}</p>
                )}
                <input
                  type="text"
                  name="address"
                  {...register("address")}
                  placeholder="Address..."
                />
                {errors.address && (
                  <p className="checkoutp">{errors.address.message}</p>
                )}
                <input
                  type="text"
                  name="amount"
                  {...register("amount")}
                  placeholder="Amount in ETB..."
                />
                {errors.amount && (
                  <p className="checkoutp">{errors.amount.message}</p>
                )}
                <select
                  className="payment"
                  name="paymentMethod"
                  {...register("paymentMethod")}
                >
                  <option value="">Select payment method</option>
                  <option value="creditCard">Chapa</option>
                  <option value="paypal">PayPal</option>
                  <option value="bankTransfer">Bank Transfer</option>
                  {/* Add more options for other payment methods */}
                </select>
                {errors.paymentMethod && (
                  <p className="checkoutp">{errors.paymentMethod.message}</p>
                )}
                <input type="submit" id="submit" value="Order Now" />{" "}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout;
