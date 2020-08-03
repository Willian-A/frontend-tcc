import React from "react";

import Navbar from "../../organism/navbar";
import Banner from "../../organism/banner";
import MainCard from "../../organism/main-card";
import Category from "../../organism/category";
import GeralContainer from "../../atoms/page-margin";

export default function Index() {
  return (
    <div style={{ height: "100%" }}>
      <Navbar />
      <GeralContainer>
        <Banner />
        <MainCard />
        <Category />
      </GeralContainer>
    </div>
  );
}
