import React from "react";
import Slider from "react-slick";
import { Brands } from "../../constant/brandList";
import Image from "next/image";
import BradLogo from "../../images/brad-logo-xl.png";

interface Setting {
  slidesToShow?: number;
  slidesToScroll?: number;
  infinite?: boolean;
  dots?: boolean;
}

interface Responsive {
  breakpoint?: number;
  settings?: Setting;
}
interface Isetting {
  dots: boolean;
  infinite: boolean;
  speed: number;
  slidesToShow: number;
  slidesToScroll: number;
  responsive: Responsive[];
}

const TopTradeMarks = () => {
  // const checkTodo: string = todo.status ? `line-through` : '';
  /*
Property 'breakpoint' is missing in type '{ dots: false; infinite: false; speed: number; slidesToShow: number; slidesToScroll: number; responsive: ({ breakpoint: number; settings: { slidesToShow: number; slidesToScroll: number; infinite: true; }; } | { ...; } | { ...; })[]; }' but required in type 'Isetting'.ts(2741)
  */
  const settings: Isetting = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="toptrademarks-slider position-relative z-index-1">
      <Slider {...settings}>
        {Brands.map((item, index) => (
          <div className="trademarks-brand-img" key={index}>
            <div className="img-light-bg">
              <Image src={BradLogo} height="57" width="140" loading="lazy" />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TopTradeMarks;
