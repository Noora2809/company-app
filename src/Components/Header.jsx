import React from "react";
import headerImg from "../Assets/real-estate-house.png";
import { Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <div>
      <div className="container-fluid">
      <div className="row row_head bg-light align-items-center justify-content-evenly">
        <div className="col text-center">
          <img
            className="img_header"
            src={headerImg}
            style={{ width: "130px", height: "80px" }}
            alt=""
          />
        </div>
        <div className="col header_head">
          <h4>XYZ SYSTEMS LLP</h4>
        </div>
      </div>
    </div>

      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="nav_links justify-content-center text-center">
            <a href="" className="mx-3 text-dark">
              Home
            </a>
            <a href="" className="mx-3 text-dark">
              Dashboard
            </a>
            <a href="" className="mx-3 text-dark">
              Products
            </a>
            <a href="" className="mx-3 text-dark">
              Transactions
            </a>
            <a href="" className="mx-3 text-dark">
              Journal
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
