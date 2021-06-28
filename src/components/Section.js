import React from "react";
import Header from "./Header";

const Section = () => {
  return (
    <div
      className="rd-container"
      style={{ background: `url(./images/rein-img.jpg)` }}
    >
      <Header />
      <div className="col-grid container">
        <h2 className="main-heading">
          Marketing, Design & Technology Solutions to{" "}
          <span className="main-heading-blue">Grow your Business</span>
        </h2>
      </div>

      <div className="col-grid sub-heading container">
          <p className="sub-heading">
          Boost your business by converting your daily viewers into dedicated and emotionally connected customers. All you need is a powerful marketing strategy.
          </p>
      </div>

    <div className="cta container">
        <button>Book your free clarity NOW</button>
    </div>
    </div>
  );
};

export default Section;
