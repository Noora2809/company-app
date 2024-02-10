import React from "react";
import celebImg from '../Assets/celebr.png'

const Exclusive = () => {
  return (
    <div>
      <div className="container">
        <div className="row mt-5">
          <div className="col-6">
            <div className="ex-head">
            <h2 className="text-info">Unlock Exclusive Benefits</h2>
            </div>
            <div className="form">
              <label htmlFor="" className="mb-2">PHONE NUMBER</label>
              <div className="phone-input w-25 mb-2">
                <input type="text" className=" phone " placeholder="+91 India" />
                <input type="text" className="phone" placeholder="9645789210" />
              </div>

              <label htmlFor="" className="mb-2 ">NAME</label>
              <div className="name ">
              <input type="text" className="input" />
              </div>

              <label htmlFor="" className="mb-2">EMAIL[OPTIONAL]</label>
              <div className="email">
              <input type="text" className=" input " />

              </div>
            </div >
            <div className="button mb-3">
            <button className="continue">Continue</button>
          </div>
          <p className="end-para">Get ready to receive a secret code [otp] on your phone</p>
          </div>
          <div className="col-6 celeb-img">
            <img src={celebImg}  alt=""  />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exclusive;