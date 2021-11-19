import React from "react";
import MainHeader from "./MainHeader";
import SearchBar from "../common/SearchBar";
const SubHeader = () => {
  return (
    <div className="sub-header-section">
      <div className="union1">
        <img src="/Union1.svg" alt="vector" width="152" height="152" />
      </div>
      <div className="union2">
        <img src="/Union2.svg" alt="vector" width="152" height="152" />
      </div>
      <div className="union3">
        <img src="/bottom-curve.png" alt="vector" width="324" height="324" />
      </div>
      <MainHeader />
      <section className="search-main">
        <div className="shape1-vector">
          <img
            src="/ellipse-shape.svg"
            className="img-fluid"
            height="100"
            width="100"
          />
        </div>

        <div className="container">
          <SearchBar />
        </div>
      </section>
    </div>
  );
};

export default SubHeader;
