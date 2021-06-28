import React from "react";

const WorkCounter = ({ title, count, info }) => {
  return (  
    <div className="work-counter">
      <h3 className="work-counter-title text-center">{title}</h3>
      <h4 className="work-count text-center">{count}</h4>
      <h5 className="work-counter-info text-center">{info}</h5>
    </div>
  );
};

export default WorkCounter;
