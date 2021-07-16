import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import BrandCardDetail from "./BrandCardDetail";
import { Brands } from "../../constant/brandList";
// import "../../styles/slick.css";
// import "~slick-carousel/slick/slick-theme.css";

const TradeMarkSimilarSlider = () => {
  const [designFlag, setDesignFlag] = useState<boolean>(false);
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };

  useEffect(() => {
    setDesignFlag(true);
  }, []);

  return (
    <div className="trademarks-slider position-relative z-index-1">
      <Slider {...settings}>
        {Brands.map((item, index) => (
          <div key={index}>
            <BrandCardDetail data={item} flag={designFlag} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TradeMarkSimilarSlider;
