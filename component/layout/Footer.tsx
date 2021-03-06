import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const footer = () => {
  const [flag, setFlag] = useState<boolean>(false);
  const router = useRouter();
  useEffect(() => {
    if (router.pathname === "/") {
      setFlag(false);
    } else {
      setFlag(true);
    }
  }, []);
  return (
    <>
      <div className="footer-shape-wrapper position-relative">
        <div className="footer-shape">
          {flag ? (
            <img src="/footer-newshape.png" height="192" width="192" />
          ) : (
            <img src="/footer-shape.png" height="192" width="192" />
          )}
        </div>
      </div>
      <footer className="footer-section position-relative">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3 col-6">
              <ul className="footer-list">
                <h4 className="footer-title mb-1">Quick Link</h4>
                <li>
                  <a href="#">Search</a>
                </li>
                <li>
                  <a href="#">Explore</a>
                </li>
                <li>
                  <a href="#">Learn</a>
                </li>
              </ul>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3 col-6">
              <ul className="footer-list">
                <h4 className="footer-title mb-1">Category</h4>
                <li>
                  <a href="#">Search</a>
                </li>
                <li>
                  <a href="#">Explore</a>
                </li>
                <li>
                  <a href="#">Learn</a>
                </li>
              </ul>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3 col-6">
              <ul className="footer-list">
                <h4 className="footer-title mb-1">Category</h4>
                <li>
                  <a href="#">Search</a>
                </li>
                <li>
                  <a href="#">Explore</a>
                </li>
                <li>
                  <a href="#">Learn</a>
                </li>
              </ul>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3 col-6">
              <ul className="footer-list">
                <h4 className="footer-title mb-1">Category</h4>
                <li>
                  <a href="#">Search</a>
                </li>
                <li>
                  <a href="#">Explore</a>
                </li>
                <li>
                  <a href="#">Learn</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="copyright-wrapper text-center">
          <p className="mb-0 text-white">
            ?? Copyright 2021 - All Right Reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default footer;
