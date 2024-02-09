import React, { useRef } from "react";
import memberImg from "../Assets/mem.png";

import { Carousel } from "react-bootstrap";
import Img1 from "../Assets/img1.jpg";
import Img2 from "../Assets/img2.jpg";
import Img3 from "../Assets/img3.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="pro_icon d-flex flex-column align-items-end me-5">
        <i className="fa-solid fa-user-tag text-primary fs-2"></i>
        <p>Joseph Lasar</p>
      </div>

      <div style={{ display: "flex" }}>
      <div className="left_col" style={{ width: "100%" }}>
      <h3 className="home_head ms-3 ms-md-5">New Arrival</h3>
      <p className="ms-3 ms-md-5 text-dark" style={{ fontSize: "10px" }}>
        JOIN TODAY
      </p>
      <hr
        className="ms-3 ms-md-5"
        style={{
          width: "25px",
          height: "2px",
          border: "none",
          backgroundColor: "black",
          marginTop: "-15px",
        }}
      />
      <div className="member_img text-center">
        <img src={memberImg} alt="" style={{ width: "70%" }} />
      </div>
      <div className="join text-center">
        <button className="btn btn-light text-info shadow">JOIN NOW</button>
      </div>
    </div>

        <div className="carousel text-center">
          <h3 className="unlock-para text-success mb-3">Unlock Premium Features Now</h3>
          <Carousel>
            <Carousel.Item>
              <div className="d-flex justify-content-around">
                <div className="card text-center me-4" style={{ width: "18rem" }}>
                  <img
                    src={Img1}
                    className="card-img-top"
                    alt="Image 1"
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title">Lower <br /> Interest Rates</h5>
                  </div>
                </div>
                <div className="card text-center me-4 " style={{ width: "18rem" }}>
                  <img
                    src={Img2}
                    className="card-img-top"
                    alt="Image 2"
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title">Interest <br /> free Payments</h5>
                  </div>
                </div>
                <div className="card text-center" style={{ width: "18rem" }}>
                  <img
                    src={Img3}
                    className="card-img-top"
                    alt="Image 3"
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title">Discount on <br />Materials</h5>
                  </div>
                </div>
              </div>
            </Carousel.Item>
          </Carousel>

          <div className="button1">
            <Link to={`/exclusive`}>
            <button className="unlock">Unlock now</button>
            </Link>
          </div>

          <div className="button2">
            <button className="reset">Reset</button>
          </div>

        </div>


      </div>
    </div>
  );
};

export default Home;
