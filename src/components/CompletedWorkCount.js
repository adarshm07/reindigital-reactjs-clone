import React from "react";
import WorkCounter from "./WorkCounter";

const CompletedWorkCount = () => {
  return (
    <div className="completed-clients-container">
      <div className="completed-clients container">
        <WorkCounter
          title={"Successful work with"}
          count={"1790"}
          info={"HAPPY CLIENTS"}
        />
        <WorkCounter
          title={"Successfully completed"}
          count={"$2B"}
          info={"AD SPENT"}
        />
        <WorkCounter
          title={"Successfully delivered"}
          count={"76+"}
          info={"APPS/WEBSITES"}
        />
        <WorkCounter
          title={"Successfully delivered"}
          count={"6B"}
          info={"EMAILS"}
        />
      </div>
    </div>
  );
};

export default CompletedWorkCount;
