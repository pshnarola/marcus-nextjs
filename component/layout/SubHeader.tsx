import React from "react";
import Image from "next/image";
import MainHeader from "./MainHeader";
import SearchBar from "../common/SearchBar";
import EllipseShape from "../../images/ellipse-shape.svg";
import NewHeadBg from "../../images/new-headbg.png";
import CircleRightYellow from "../../images/circle-light-yellow.svg";

const SubHeader = () => {
  return (
    <div>
      <MainHeader />
      <section className="search-main">
        <div className="white-box-shape"></div>
        <div className="shape1-vector">
          <Image
            src={EllipseShape}
            className="img-fluid"
            height="100"
            width="100"
            loading="lazy"
          />
        </div>
        <div className="shape2-vector">
          <Image
            src={CircleRightYellow}
            className="img-fluid"
            height="80"
            width="80"
          />
        </div>
        <div className="allpage-shape">
          <Image
            src={NewHeadBg}
            className="img-fluid"
            height="328"
            width="1080"
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
