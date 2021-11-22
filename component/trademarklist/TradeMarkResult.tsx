import React, { useState } from "react";
import Link from "next/link";
import ReactPaginate from "react-paginate";
import Styles from "./tradeMarkResult.module.css";
import BrandCardDetail from "../common/BrandCardDetail";

type Props = {
  tradeMarks: Array<any>;
  allSuggetion: Array<any>;
};

const TradeMarkResult: React.FC<Props> = ({ tradeMarks }) => {
  const [currentPage, setCurrentPage] = useState<number>(0);

  const PER_PAGE = 3;
  const off_set = currentPage * PER_PAGE;

  const currentPageData = tradeMarks && tradeMarks.slice(off_set, off_set + PER_PAGE);

  const pageCount = Math.ceil(tradeMarks && tradeMarks.length / PER_PAGE);

  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }

  return (
    <>
      <div>
        <h2 className="section-heading-medium mb-3 pb-1">Search Results</h2>
        <small className={`${Styles[`showresult-txt`]} mb-1 d-inline-block`}>
          Showing Result <span>1-20</span> for <span>'Nike'</span>
        </small>
        <div className={`${Styles[`search-tab-list`]} position-relative`}>
          <ul className={`${Styles[`card-body`]}`}>
            <li>
              All <span>(250)</span>
            </li>
            <li>
              Brands <span>(250)</span>
            </li>
            <li>
              Owners <span>(250)</span>
            </li>
            <li>
              Goods & Services <span>(250)</span>
            </li>
            <li>
              Enforcement <span>(250)</span>
            </li>
          </ul>
        </div>
        {currentPageData && currentPageData.map((item, index) => {
          const title = item._source.mark_identification
          const id = item._source.serial_number

          return (
            <Link href={`/trademarklist/${id}`} prefetch={true} key={index}>
              <div>
                <BrandCardDetail data={item._source} flag={false} />
              </div>
            </Link>
          );
        })}
        <div
          className={`${
            Styles[`custom-pagination`]
          } d-flex align-items-center justify-content-center mt-4 pt-2`}
        >
          <ReactPaginate
            previousLabel={"<"}
            nextLabel={">"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={2}
            onPageChange={handlePageClick}
            previousLinkClassName={`${Styles[`pagination-left-arrow`]}`}
            nextLinkClassName={`${Styles[`pagination-right-arrow`]}`}
            disabledClassName={`${Styles[`pagination__link--disabled`]}`}
            containerClassName={`${Styles[`pagination`]}`}
            activeClassName={`${Styles[`pagination__link--active`]}`}
          />
        </div>
      </div>
    </>
  );
};

export default TradeMarkResult;
