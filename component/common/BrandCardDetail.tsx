import React, { useState } from "react";
import Styles from "./brandCardDetail.module.css";
import { sourceObject } from "../../interface";

type Props = {
  data: sourceObject;
  flag: boolean;
};


const BrandCardDetail: React.FC<Props> = ({ data, flag }) => {
  const [readMore, setReadMore] = useState<boolean>(false);

  const extraContent = (
    <p className={`${Styles[`brand-info`]}`}>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry
      Ipsum a ever since the simply dummy text of the printing and
      {/* {data.description} */}
    </p>
  );

  const linkName = readMore ? "Read less..." : "Read more...";
  return (
    <div
      className={`${Styles[`trademarks-brand`]} position-relative z-index-1`}
    >
      <div className={`${Styles[`search-list-card`]} card`}>
        <div className="row align-items-center">
          <div className={`${Styles[`searchlist-left-wrapper`]} col-md-4`}>
            <div
              className={`${
                Styles[`barnd-img-block`]
              } d-flex align-items-center justify-content-center`}
            >
              <img src="/brand-logo.png" height="70" width="170" />
            </div>
          </div>
          <div className={`${Styles[`searchlist-right-wrapper`]} col-md-8`}>
            <div
              className={`${
                Styles[`brand-title`]
              } d-flex justify-content-between flex-wrap`}
            >
              <h3>{data.mark_identification}</h3>
              <p className={`${Styles[`brand-registered`]}`}>
                Registered: <span>{data.registration_date}</span>
              </p>
            </div>
            <p className={`${Styles[`owner-txt`]} pb-1`}>
              Owner : <span>{data.party_name} </span>
            </p>
            <div className={`${Styles[`brand-info-wrapper`]}`}>
              <p className={`${Styles[`brand-info`]}`}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                <a
                  className={`${Styles[`read-less-more`]}`}
                  onClick={() => {
                    setReadMore(!readMore);
                  }}
                >
                  {linkName}
                </a>
              </p>
              {readMore && extraContent}
            </div>
            <div
              className={`${
                Styles[`brand-serial-registration`]
              } d-flex justify-content-between flex-wrap`}
            >
              <p
                className={
                  flag
                    ? `${Styles[`yellow-gray-label0`]} mb-0`
                    : `${Styles[`yellow-gray-label`]} mb-0`
                }
              >
                Serial Number : <span>{data.serial_number}</span>
              </p>
              <p
                className={
                  flag
                    ? `${Styles[`yellow-gray-label0`]} mb-0 text-end`
                    : `${Styles[`yellow-gray-label`]} mb-0 `
                }
              >
                Registration Number :<span>{ data.registration_number}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandCardDetail;
