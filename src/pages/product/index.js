import React from "react";

import Navbar from "../../components/navbar";
import GeralContainer from "../../styled/page-margin";
import ProdCard from "./components/product-frame";

export default function Product() {
  return (
    <div style={{ height: "100%" }}>
      <Navbar />
      <GeralContainer>
        <ProdCard />
      </GeralContainer>
    </div>
  );
}