import React from "react";
import Navebar from "../Components/Common/Navebar";
import Search from "../Components/Common/Search";
import Productpage from "./Productpage";
function Home({ cartsize }) {
  return (
    <div>
      <Navebar cartsize={cartsize} />
      <Search />
      <Productpage />
    </div>
  );
}
export default Home;
