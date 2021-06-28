import React from "react";
import AccordionDemo from "./AccordionDemo";

const Who = () => {
  return (
    <div className="who">
      <div className="container">
        <div className="container-who">
          <h3 className="sub-heading">OUR COMPANY</h3>
          <h2 className="heading-services">Who are we?</h2>
          <br></br>
          <p className="who-description">
            At REIN Digital, we are a bunch of passionate, agile, ambitious,
            experienced, and humble experts absolutely obsessed with the digital
            space. Relying only on data-oriented solutions, we offer a wide
            array of services in the digital marketing space including web
            design and development, SEO, email marketing, paid marketing,
            digital strategist, and content writing. Just where you may be
            seeing a roadblock in your growth, we see an opportunity to deliver
            results!
          </p>
          <button className="btn btn-blue" style={{ margin: "20px 0" }}>
            Contact us now{" "}
          </button>
        </div>
        <AccordionDemo />
      </div>
    </div>
  );
};

export default Who;
