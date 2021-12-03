import React from "react";
import TreeChart from "./treeChart/TreeChart";

export const Dashboard = ({ stories }) => {
  return (
    <>
      <div className="content-container">
        <div className="tree flex-center" style={{ marginRight: "20px" }}>
          <TreeChart stories={stories} />
        </div>
      </div>
    </>
  );
};
