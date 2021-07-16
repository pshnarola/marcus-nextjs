import React from "react";
import Image from "next/image";
import Styles from "./bannerSection.module.css";
import SearchBar from "../common/SearchBar";
import BannerVector from "../../images/banner-vector.png";
import Union1 from "../../images/Union1.svg";
import Union2 from "../../images/Union2.svg";
import BottomCurve from "../../images/bottom-curve.png";
// import BannerVector from "../../images/banner-vector.png";
import Vector1 from "../../images/vector1.png";
// import Vector1 from "../../images/vector1.png";

const BannerSection = () => {
  return (
    <section className={`${Styles[`banner-section`]} position-relative`}>
      <div className={Styles.union1}>
        <Image
          src={Union1}
          // placeholder="blur"
          alt="vector"
          width="152"
          height="152"
        />
      </div>
      <div className={Styles.union2}>
        <Image
          src={Union2}
          // placeholder="blur"
          alt="vector"
          width="152"
          height="152"
        />
      </div>
      <div className={Styles.union3}>
        <Image
          src={BottomCurve}
          placeholder="blur"
          alt="vector"
          width="324"
          height="324"
        />
      </div>
      {/* <div className={`${Styles[`shape1`]}`}></div> */}
      {/* <div className={`${Styles.vector2}`}>
        <Image
          src={BannerVector}
          placeholder="blur"
          alt="vector"
          width="1081"
          height="856"
        />
      </div> */}
      <div className={`${Styles[`vector1`]}`}>
        <Image
          src={Vector1}
          placeholder="blur"
          alt="vector"
          width="620"
          height="753"
        />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <div
              className={`${Styles[`banner-left-wrapper`]} position-relative`}
            >
              <div className={`${Styles[`do-brands`]}`}>
                <span>Do Brands</span>
              </div>
              <h1 className={`${Styles[`banner-title`]} mb-0`}>Differently</h1>
              <p className={`${Styles[`banner-sub-label`]} mb-0`}>
                Explore thousands of brands and keep track of what matters
              </p>

              <SearchBar />
              <p className={`${Styles[`search-info-label`]} mb-0`}>
                Try searching for a brand or company and get instant
                information.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
