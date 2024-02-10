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

      <div className="row">
      <div className="col-4">
      <h3 className="home_head ms-3 ms-md-5">New Arrival</h3>
      <p className="ms-3 ms-md-5 text-dark" style={{ fontSize: "10px" }}>
        JOIN TODAY
      </p>
      <hr
        className="Home_sub_head ms-3 ms-md-5"
      />
      <div className="member_img text-center">
        <img src={memberImg} alt="" />
      </div>
      <div className="join text-center">
        <button className="btn btn-light text-info shadow">JOIN NOW</button>
      </div>
      </div>

        <div className="col-8 carousel text-center mt">
          <h3 className="unlock-para text-success mb">Unlock Premium Features Now</h3>

          <Carousel>
          <Carousel.Item>
          <div className="carousel-inner mt">
            <div className="d-flex justify-content-around">
              <div className="card text-center" >
                <img
                  src={Img1}
                  className="card-img-top"
                  alt="Image 1"
                />
                <div className="card-body text-center">
                  <h5 className="card-title">Lower <br /> Interest Rates</h5>
                </div>
                </div>
              <div className="card text-center" >
                <img
                  src={Img2}
                  className="card-img-top"
                  alt="Image 2"
                />
                <div className="card-body text-center">
                  <h5 className="card-title">Interest <br /> free Payments</h5>
                </div>
              </div>
              <div className="card text-center" >
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
