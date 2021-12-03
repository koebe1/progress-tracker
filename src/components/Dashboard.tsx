import React from "react";
import TreeChart from "./TreeChart";

export const Dashboard = ({ stories }) => {
  return (
    <>
      <div className="content-container">
        <div className="tree flex-center">
          <TreeChart stories={stories} />
        </div>
      </div>
    </>
  );
};
