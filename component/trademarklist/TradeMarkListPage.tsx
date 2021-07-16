import React, { useEffect, useState } from "react";
import Image from "next/image";
import Styles from "./tradeMarkListPage.module.css";
import TradeMarkFilter from "./TradeMarkFilter";
import TradeMarkResult from "./TradeMarkResult";
import SubHeader from "../layout/SubHeader";
import Footer from "../layout/Footer";
import { Brands } from "../../constant/brandList";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { SET_SEARCHBAR_WIDTH } from "../../store/actions/search/general/actionTypes";
import CircleLightYellow from "../../images/circle-light-yellow.svg";
import HalfCircleShape from "../../images/halfcircle-shape.png";

interface Ireducer {
  search: any;
  searchData: string;
}

const TradeMarkListPage = () => {
  const [filtered, setFiltered] = useState<Array<any>>([]);
  const searchedData = useSelector(
    (state: Ireducer) => state.search.searchData
  );

  useEffect(() => {
    setFiltered(
      Brands.filter((item) => {
        return item.title.toLowerCase().includes(searchedData.toLowerCase());
      })
    );
  }, [searchedData]);

  const dispatch = useDispatch();

  const router = useRouter();

  useEffect(() => {
    if (router.pathname === "/trademarklist") {
      document.body.className += "lightsky-bg";
      dispatch({
        type: SET_SEARCHBAR_WIDTH,
        payload: true,
      });
    }
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
      <SubHeader />
      <section className="trademarklist-section pt-5 position-relative">
        <div className={`${Styles[`yellow-cirlce-shape`]}`}>
          <Image
            src={CircleLightYellow}
            className="img-fluid"
            height="218"
            width="218"
          />
        </div>
        <div className="halfcircle-shape">
          <Image
            src={HalfCircleShape}
            className="img-fluid"
            height="264"
            width="120"
          />
        </div>
        <div className="container">
          <div className="row mt-4 pt-2">
            <div
              className={`${
                Styles[`trademarkfilter-left-wrapper`]
              } col-md-4 position-relative`}
            >
              <TradeMarkFilter />
            </div>
            <div
              className={`${Styles[`trademarkfilter-right-wrapper`]} col-md-8`}
            >
              <TradeMarkResult filteredValue={filtered} />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default TradeMarkListPage;
