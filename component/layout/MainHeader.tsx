import React, { useState } from "react";

const MainHeader = () => {
  const [openToggle, setOpenToggle] = useState(false);

  const buttonHandler = () => {
    setOpenToggle(!openToggle);
  };
  return (
    <nav
      className="navbar-main
       navbar navbar-expand-lg navbar-dark bg-dark pt-0 pb-0"
      aria-label="Eighth navbar example"
    >
      <div className="container">
        <a className="navbar-brand pt-0 pb-0 outline-none" href="#">
          <b>LOGO HERE</b>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsExample07"
          aria-controls="navbarsExample07"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={buttonHandler}
        >
          <span className="navbar-toggler-icon">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </span>
        </button>

        <div
          className={`${
            openToggle ? "show" : ""
          } collapse navbar-collapse nav-menu-list `}
          id="navbarsExample07"
        >
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Search
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Explore
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Learn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MainHeader;
