import React, { useEffect } from "react";
import SubHeader from "../layout/SubHeader";
import Styles from "./tradeMarkDetailPage.module.css";
import { SET_SEARCHBAR_WIDTH } from "../../store/actions/search/general/actionTypes";
import { useDispatch } from "react-redux";
import Footer from "../layout/Footer";
import TradeMarkSimilarSlider from "../common/TradeMarkSimilar";
import TopTradeMarks from "../common/TopTradeMarks";
import {detailsObject} from "../../interface/index"
import Image from "next/image";
import moment from "moment";

type Props = {
  tradeDetails?: detailsObject;
  allSuggetion?: Array<any>;
};

const TradeMarkDetailPage: React.FC<Props> = ({tradeDetails, allSuggetion}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    document.body.className += "lightsky-bg";
    dispatch({
      type: SET_SEARCHBAR_WIDTH,
      payload: true,
    });
    return () => {
      dispatch({
        type: SET_SEARCHBAR_WIDTH,
        payload: false,
      });
      document.body.className = "";
    };
  }, []);


  return (
    <>
      <SubHeader allSuggetion={allSuggetion}/>
  
      <section
        className={`${Styles[`detail-section`]} pt-5 mt-4 position-relative`}
      >
        <div className="halfcircle-shape">
          <img
            src="/halfcircle-shape.png"
            className="img-fluid"
            height="264"
            width="120"
          />
        </div>
        <div className="container mt-3">
          <div className="row">
            <div className="col-sm-12">
              <h2 className="section-heading mb-4">
                NIKE Trademark Information
              </h2>
            </div>
          </div>
          <div className="row align-items-center">
            <div
              className={`${
                Styles[`branddetails-left-main`]
              } col-sm-4 col-md-4 col-lg-4 mb-5`}
            >
              <div className={`${Styles[`branddetails-img`]}`}>
                <img
                  src="/brad-logo-xl.png"
                  className="img-fluid"
                  alt="vector"
                  width="350"
                  height="191"
                />
              </div>
            </div>
            <div
              className={`${
                Styles[`branddetails-right-main`]
              } col-sm-8 col-md-8 col-lg-8 mb-5`}
            >
              <div className={`${Styles[`branddetails-right-info`]}`}>
                <p className="mb-0">
                  Nike is a registered trademark owned by nike, Inc. It was
                  registered on December 12, 1992. Lorem Ipsum is simply dummy
                  text of the printing and typesetting industry. Lorem Ipsum has
                  been the industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and scrambled it
                  to makebook.
                  <br />
                  <br />
                  It has survived not only five centuries, but also the leap
                  electronic typesetting, remaining essentially unchanged.
                  popularised in the 1960s with the release of Letraset sheets
                  containing Lorem Ipsum passages, and more recently with
                  desktop publishing software like Aldus PageMaker including
                  versions of.
                </p>
              </div>
            </div>
          </div>
          <div
            className={`${Styles[`trademarkdetails-row`]} row mt-3 mb-5 pb-4`}
          >
            {/* {tradeDetails.map((tradeDetails, index) => ( */}
            <div className="col-sm-12">
              <div
                className={`${
                  Styles[`branddetail-list`]
                } position-relative z-index-1`}
              >
                <h4
                  className={`${Styles[`branddetail-heading`]} yellow-txt mb-3`}
                >
                   Trademark Details
                </h4>
                <div className={`${Styles[`branddetail-info-list`]} d-flex`}>
                  <div className={`${Styles[`branddetail-left-label`]}`}>
                    <label>Mark :</label>
                  </div>
                  <div className={`${Styles[`branddetail-right-label`]}`}>
                    <span className={`${Styles[`detailnormal-txt`]}`}>
                      {tradeDetails.mark_identification == undefined ? "" : tradeDetails.mark_identification}
                      </span>
                  </div>
                </div>
                <div className={`${Styles[`branddetail-info-list`]} d-flex`}>
                  <div className={`${Styles[`branddetail-left-label`]}`}>
                    <label>Serial Number: </label>
                  </div>
                  <div className={`${Styles[`branddetail-right-label`]}`}>
                    <span
                      className={`${Styles[`detailnormal-txt`]} yellow-txt`}
                    >
                      {tradeDetails.serial_number}
                    </span>
                  </div>
                </div>
                <div className={`${Styles[`branddetail-info-list`]} d-flex`}>
                  <div className={`${Styles[`branddetail-left-label`]}`}>
                    <label>Registration Number: </label>
                  </div>
                  <div className={`${Styles[`branddetail-right-label`]}`}>
                    <span
                      className={`${Styles[`detailnormal-txt`]} yellow-txt`}
                    >
                      {tradeDetails.registration_number}
                    </span>
                  </div>
                </div>
                <div className={`${Styles[`branddetail-info-list`]} d-flex`}>
                  <div className={`${Styles[`branddetail-left-label`]}`}>
                    <label>Owner: </label>
                  </div>
                  <div className={`${Styles[`branddetail-right-label`]}`}>
                    <span className={`${Styles[`detailnormal-txt`]}`}>
                      <b>{tradeDetails.party_name}</b>
                    </span>
                  </div>
                </div>
                <div className={`${Styles[`branddetail-info-list`]} d-flex`}>
                  <div className={`${Styles[`branddetail-left-label`]}`}>
                    <label>Classification: </label>
                  </div>
                  <div className={`${Styles[`branddetail-right-label`]}`}>
                    <span className={`${Styles[`detailnormal-txt`]} fw-600`}>
                      {tradeDetails.classification}
                    </span>
                  </div>
                </div>
                <div className={`${Styles[`branddetail-info-list`]} d-flex`}>
                  <div className={`${Styles[`branddetail-left-label`]}`}>
                    <label>Date of Registration </label>
                  </div>
                  <div className={`${Styles[`branddetail-right-label`]}`}>
                    <span className={`${Styles[`detailnormal-txt`]} fw-600`}>
                    {/* {moment(tradeDetails.registration_date, "MMMM D, YYYY") } */}
                      {moment(tradeDetails.registration_date).format('MMMM DD YYYY') == "Invalid date" ? "-" : moment(tradeDetails.registration_date).format('MMMM DD YYYY')}     
                    </span>
                  </div>
                </div>
                {/* <div className={`${Styles[`branddetail-info-list`]} d-flex`}>
                  <div className={`${Styles[`branddetail-left-label`]}`}>
                    <label>Date of Registration </label>
                  </div>
                  <div className={`${Styles[`branddetail-right-label`]}`}>
                    <span className={`${Styles[`detailnormal-txt`]} fw-600`}>
                      December 18, 1992
                    </span>
                  </div>
                </div> */}
                <div className={`${Styles[`branddetail-info-list`]} d-flex`}>
                  <div className={`${Styles[`branddetail-left-label`]}`}>
                    <label>Description</label>
                  </div>
                  <div className={`${Styles[`branddetail-right-label`]}`}>
                    <span className={`${Styles[`detailnormal-txt`]} fw-600`}>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </span>
                  </div>
                </div>
                <div className={`${Styles[`branddetail-info-list`]} d-flex`}>
                  <div
                    className={`${
                      Styles[`branddetail-left-label`]
                    } border-right-0`}
                  >
                    <label>Date of first User:</label>
                  </div>
                  <div className={`${Styles[`branddetail-right-label`]}`}>
                    <span className={`${Styles[`detailnormal-txt`]} fw-600`}>
                     {moment(tradeDetails.first_use_anywhere_date).format('MMMM DD YYYY') == "Invalid date" ? "-" : moment(tradeDetails.first_use_anywhere_date).format('MMMM DD YYYY')}
                    </span>
                  </div>
                </div>
                <div className={`${Styles[`branddetail-info-list`]} d-flex`}>
                  <div
                    className={`${
                      Styles[`branddetail-left-label`]
                    } border-right-0`}
                  >
                    <label>Attorney:</label>
                  </div>
                  <div className={`${Styles[`branddetail-right-label`]}`}>
                    <span className={`${Styles[`detailnormal-txt`]} fw-600`}>
                      {tradeDetails.attorney_name}
                    </span>
                  </div>
                </div>
                <div className={`${Styles[`branddetail-info-list`]} d-flex`}>
                  <div
                    className={`${
                      Styles[`branddetail-left-label`]
                    } border-right-0`}
                  >
                    <span className={`${Styles[`detailnormal-txt`]} fw-600`}>
                      <a href="#" className="yellow-txt text-decoration">
                        View more:
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
             {/* ))}  */}
          </div>
          <div className="row mb-4 pb-3">
            <div className="col-sm-12">
              <h3 className="section-medium-heading mb-2">
                Trademarks Similar to Nike
              </h3>
              <TradeMarkSimilarSlider />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <h3 className="section-medium-heading mb-2">Top Trademarks</h3>
              <TopTradeMarks />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default TradeMarkDetailPage;
