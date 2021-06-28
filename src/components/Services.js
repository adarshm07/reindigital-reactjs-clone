import React from "react";
import ServicesCard from "./ServicesCard";

const Services = () => {
  return (
    <div className="services-rein">
      <div className="container">
        <h3 className="sub-heading text-center">SERVICES WE DELIVER</h3>

        <h2 className="heading-services text-center">
          Look at us as the missing piece in your marketing puzzle. <br></br>
          Let’s
          <span className="color-blue text-center">
            {" "}
            complete the picture together!
          </span>
        </h2>
        <div className="services">
          <ServicesCard
            title={"Digital Strategy"}
            description={
              " The power of digital is immense and harnessing its potential is your key to awaiting opportunities for success. Let’s drive you more business via pragmatic and strategic moves that help find unexpected value and convert qualified leads."
            }
          />
          <ServicesCard />
          <ServicesCard />
          <ServicesCard />
          <ServicesCard />
          <ServicesCard />
        </div>

        <div className="btn-services">
          <button className="btn btn-blue">Talk to a consultant </button>
          <button className="btn btn-white">Contact us now </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
