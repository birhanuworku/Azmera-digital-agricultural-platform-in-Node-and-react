import React, { useContext } from "react";
import ChapaContext from "./ChapaContext";

function Success() {
  const verifyUrl = useContext(ChapaContext);
  console.log(verifyUrl);
  return (
    <div>
      Payement success
      <p> </p>
    </div>
  );
}

export default Success;
