import React from "react";
import Image from "next/image";
import Styles from "./aboutsection.module.css";
import BorderCircle from "../../images/border-cricle.svg";
import Comprehensive from "../../images/comprehensive.svg";
import Circle from "../../images/circle.svg";
import SearchTrack from "../../images/search-track.svg";
// import SearchTrack from "../../images/search-track.svg";
import CircleRight from "../../images/circle-right.svg";
import BuildProtect from "../../images/build-protect.svg";

const AboutSection = () => {
  return (
    <>
      <section className="about-section pt-5 mt-5 mb-4 position-relative">
        <div className={`${Styles[`aboutus-border-circle`]}`}>
          <Image src={BorderCircle} height="690" width="325" loading="lazy" />
        </div>
        <div className="container">
          <div className="row">
            <div className={`${Styles[`about-wrapper`]} text-center`}>
              <p className="section-title">ABOUT US</p>
              <h2 className="section-heading mb-4 pb-3">
                Reference site about lorem Ipsum,
                <br className="d-none d-lg-block" />
                giving information origins.
              </h2>
              <p className={`${Styles[`about-intro`]}`}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry lorem Ipsum has <br className="d-none d-lg-block" />
                been the ever since the 1500s, when an unknown printer took a
                galley of type and scrambled it to make a type specimen book.
                <br className="d-none d-lg-block" />
                <br className="d-none d-lg-block" /> It has survived not only
                five centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged.
                <br className="d-none d-lg-block" /> It was popularised in the
                1960s with the release of Letraset sheets containing lorem
                Ipsum.
              </p>
              <button className={`${Styles[`explore-btn`]} btn blue-btn mt-5`}>
                Explore More
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="comprehensive-section position-relative mb-2">
        <div className={`${Styles[`shape-cricle-left`]}`}>
          <Image src={Circle} height="487" width="487" loading="lazy" />
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
              <div className="comprehensive-left-wrapper">
                <Image
                  src={Comprehensive}
                  height="490"
                  width="515"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
              <div className="comprehensive-rigth-wrapper">
                <p className="section-title mb-2 letter-spacing-0">
                  0k+ Brands{" "}
                </p>
                <h2 className="section-heading mb-4 pb-1">Comprehensive</h2>
                <p className={`${Styles[`about-intro`]}`}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry lorem been the ever since the 1500s, when
                  an unknown printer took.
                  <br className="d-none d-lg-block" />
                  <br className="d-none d-lg-block" />
                  It has survived not only five centuries, but also the leap
                  into electronic typesetting, It was popularised in the 1960s
                  with the release.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="exploreTrack-section position-relative mb-5 pb-3">
        <div
          className={`${Styles[`shape-cricle-right`]} ${
            Styles[`explore-cricle-right`]
          }`}
        >
          <Image src={CircleRight} height="487" width="487" loading="lazy" />
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 order-2 order-sm-1">
              <div className="comprehensive-rigth-wrapper text-end">
                <p className="section-title mb-2 letter-spacing-0">
                  Explore, Discover & Track
                </p>
                <h2 className="section-heading mb-4 pb-1">Search & Track</h2>
                <p className={`${Styles[`about-intro`]}`}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry lorem been the ever since the 1500s, when
                  an unknown printer took.
                  <br className="d-none d-lg-block" />
                  <br className="d-none d-lg-block" />
                  It has survived not only five centuries, but also the leap
                  into electronic typesetting, It was popularised in the 1960s
                  with the release.
                </p>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 order-1 order-sm-2">
              <div className="comprehensive-left-wrapper">
                <Image
                  src={SearchTrack}
                  height="415"
                  width="676"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="growbrand-section position-relative mb-2">
        <div
          className={`${Styles[`shape-cricle-left`]} ${
            Styles[`growbrand-cricle`]
          }`}
        >
          <Image src={Circle} height="500" width="384" loading="lazy" />
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
              <div className="comprehensive-left-wrapper">
                <Image
                  src={BuildProtect}
                  height="430"
                  width="565"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
              <div className="comprehensive-rigth-wrapper">
                <p className="section-title mb-2 letter-spacing-0">
                  Grow Your Brand
                </p>
                <h2 className="section-heading mb-4 pb-1">Build & Protect</h2>
                <p className={`${Styles[`about-intro`]}`}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry lorem been the ever since the 1500s, when
                  an unknown printer took.
                  <br className="d-none d-lg-block" />
                  <br className="d-none d-lg-block" />
                  It has survived not only five centuries, but also the leap
                  into electronic typesetting, It was popularised in the 1960s
                  with the release.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
