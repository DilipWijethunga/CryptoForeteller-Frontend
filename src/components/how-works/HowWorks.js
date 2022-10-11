import React from "react";
import { Link } from "react-router-dom";

const HowWorks = () => {
  return (
    <div className="dg__work__area how__work bg__color--4">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12 col-12">
            <div className="thumb">
              <img
                src={process.env.PUBLIC_URL + "/images/about/how-work-image.png"}
                alt="computer images"
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 col-12 sm__mt--40 md__mt--40">
            <div className="content">
              <h2>How It Works?</h2>
              <p className={"text-white"}>
                Our system carrie out multiple tasks such as, cryptocurrency future prices prediction.
                Analyze the community ideas, feedbacks and news to understand community mindset.
                Predict the date of the crypto currencies being somewhat stable. Show which days are better
                to trade each cryptocurrency by analysing 24Hrs trading volumes. Generate overall trust scores.
              </p>
              <Link
                className="slider--one dg__btn btn--white btn--theme"
                to={process.env.PUBLIC_URL + "/coins"}
              >
                GET STARTED
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWorks;
