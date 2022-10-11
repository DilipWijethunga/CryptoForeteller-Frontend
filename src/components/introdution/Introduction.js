import React from "react";
import { Link } from "react-router-dom";
const Introduction = () => {
  return (
    <div className="dg__secure__transaction">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <div className="dg__secure__inner">
              <h2>
                Introduction
              </h2>
              <p>
                A cryptocurrency is a virtual currency. They became popular because of the decentralisation, and easy access.
                There are more than 13,000 cryptocurrencies currently in the market and scam projects are rising everyday.
                Therefore, carrying out a technical and fundamental analysis before buying is is essential.
                Instead of carrying out them manually, we tend to automating the process which can save lot of time and
                more efficient because crypto currency market moves very quickly.
              </p>
              <Link
                className="secure__btn dg__btn btn--trans"
                to={process.env.PUBLIC_URL + "/coins"}
              >
                GET STARTED
              </Link>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="dg__secure__thumb">
              <img
                src={process.env.PUBLIC_URL + "/images/about/introduction-image.png"}
                alt="secure images"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
