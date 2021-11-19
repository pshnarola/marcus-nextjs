import React from "react";
import Styles from "./bannerSection.module.css";
import SearchBar from "../common/SearchBar";

const BannerSection = ({allSuggetion}) => {
  return (
    <section className={`${Styles[`banner-section`]} position-relative`}>
      <div className={Styles.union1}>
        <img
          className="img-fluid"
          src="/Union1.svg"
          alt="vector"
          width={152}
          height={152}
        />
      </div>
      <div className={Styles.union2}>
        <img
          className="img-fluid"
          src="/Union2.svg"
          alt="vector"
          width={152}
          height={152}
        />
      </div>
      <div className={Styles.union3}>
        <img src="/bottom-curve.png" alt="vector" width={324} height={324} />
      </div>

      <div className={`${Styles[`vector1`]}`}>
        <img
          className="img-fluid"
          src="/vector1.png"
          alt="vector"
          width={620}
          height={753}
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

              <SearchBar allSuggetion={allSuggetion}/>
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
