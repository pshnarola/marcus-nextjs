import React, { useEffect, useState } from "react";
import { TradeMarkBrand, Brands, Products } from "../../constant/brandList";
import Styles from "./trademarkFilter.module.css";

const TradeMarkFilter = () => {
  const [brands, setBrands] = useState<Array<string>>([]);
  const [products, setProducts] = useState<Array<string>>([]);
  const [owner, setOwner] = useState<Array<any>>([]);
  const [brandItemToShow, setBrandItemToShow] = useState<number>(3);
  const [ownerToShow, setOwnerToShow] = useState<number>(3);
  const [productToShow, setProductToShow] = useState<number>(3);
  const [brandItemExpand, setBrandItemExpand] = useState<boolean>(false);
  const [ownerExpand, setOwnerExpand] = useState<boolean>(false);
  const [productExpand, setProductExpand] = useState<boolean>(false);
  const [openToggle, setOpenToggle] = useState<boolean>(false);
  const [filter, setFilter] = useState<boolean>(false);

  useEffect(() => {
    setBrands(TradeMarkBrand);
    setProducts(Products);
    setOwner(Brands);
    if (window.innerWidth < 720) {
      setFilter(true);
    }
  }, []);

  const showMoreBrands = () => {
    if (brandItemToShow === 3) {
      setBrandItemToShow(brands.length);
      setBrandItemExpand(true);
    } else {
      setBrandItemToShow(3);
      setBrandItemExpand(false);
    }
  };

  const showMoreOwner = () => {
    if (ownerToShow === 3) {
      setOwnerToShow(owner.length);
      setOwnerExpand(true);
    } else {
      setOwnerToShow(3);
      setOwnerExpand(false);
    }
  };

  const showMoreProducts = () => {
    if (productToShow === 3) {
      setProductToShow(products.length);
      setProductExpand(true);
    } else {
      setProductToShow(3);
      setProductExpand(false);
    }
  };

  const toggleHandler = () => {
    setOpenToggle(!openToggle);
  };
  return (
    <div className={`${Styles[`trademark-filter-wrapper`]}`}>
      <div className={`${Styles[`card`]}`}>
        <div className={`${Styles[`card-body`]}`}>
          <h4 onClick={toggleHandler} className={`${Styles[`filter-label`]}`}>
            Sort By
            {filter ? (
              <img
                src="/filter.svg"
                className="filter_icon"
                height="16"
                width="16"
              />
            ) : (
              ""
            )}
          </h4>
          <div
            className={openToggle ? "" : `${Styles[`Filter-dropdown-wrapper`]}`}
          >
            <div className={`${Styles[`filter-dropdown`]} dropdown `}>
              <button
                className={`${
                  Styles[`filterdropdown-toggle`]
                } btn btn-secondary dropdown-toggle mb-4`}
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Relevance
              </button>

              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
            <h4 className={`${Styles[`filter-label`]} mb-3`}>Brands</h4>
            <ul className="list-group">
              {brands.slice(0, brandItemToShow).map((item, index) => (
                <li
                  key={index}
                  className={`${
                    Styles[`filter-list`]
                  } list-group-item d-flex justify-content-between`}
                >
                  <div
                    className={`${Styles[`filter-checkproduct`]} form-check`}
                  >
                    <input
                      className="custom-checkbox form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label checkbox-label"
                      htmlFor="flexCheckDefault"
                    >
                      {item}
                    </label>
                  </div>
                  <div className={`${Styles[`prouct-count`]}`}>(250)</div>
                </li>
              ))}
            </ul>
            <a
              className={`${
                Styles[`filterdropdown-toggle`]
              } h-34 btn btn-primary mb-4 d-flex align-items-center justify-content-between`}
              onClick={showMoreBrands}
            >
              {brandItemExpand ? (
                <span>Show less</span>
              ) : (
                <span>Show more</span>
              )}
              <img src="/downdark-arrow.svg" height="8" width="13" />
            </a>
            <h4 className={`${Styles[`filter-label`]} mb-3`}>Owners</h4>
            <ul className="list-group">
              {owner.slice(0, ownerToShow).map((item, index) => (
                <li
                  key={index}
                  className={`${
                    Styles[`filter-list`]
                  } list-group-item d-flex justify-content-between`}
                >
                  <div
                    className={`${Styles[`filter-checkproduct`]} form-check`}
                  >
                    <input
                      className="custom-checkbox form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label checkbox-label"
                      htmlFor="flexCheckDefault"
                    >
                      {item.owner}
                    </label>
                  </div>
                  <div className={`${Styles[`prouct-count`]}`}>(250)</div>
                </li>
              ))}
            </ul>
            <a
              className={`${
                Styles[`filterdropdown-toggle`]
              } h-34 btn btn-primary mb-4 d-flex align-items-center justify-content-between`}
              onClick={showMoreOwner}
            >
              {ownerExpand ? <span>Show less</span> : <span>Show more</span>}
              <img src="/downdark-arrow.svg" height="8" width="13" />
            </a>
            <h4 className={`${Styles[`filter-label`]} mb-3`}>
              Goods & Services
            </h4>
            <ul className="list-group">
              {products.slice(0, productToShow).map((item, index) => (
                <li
                  key={index}
                  className={`${
                    Styles[`filter-list`]
                  } list-group-item d-flex justify-content-between`}
                >
                  <div
                    className={`${Styles[`filter-checkproduct`]} form-check`}
                  >
                    <input
                      className="custom-checkbox form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label checkbox-label"
                      htmlFor="flexCheckDefault"
                    >
                      {item}
                    </label>
                  </div>
                  <div className={`${Styles[`prouct-count`]}`}>(250)</div>
                </li>
              ))}
            </ul>
            <a
              className={`${
                Styles[`filterdropdown-toggle`]
              } h-34 btn btn-primary d-flex align-items-center justify-content-between`}
              onClick={showMoreProducts}
            >
              {productExpand ? <span>Show less</span> : <span>Show more</span>}
              <img src="/downdark-arrow.svg" height="8" width="13" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradeMarkFilter;
