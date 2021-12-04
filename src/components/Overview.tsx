import React from "react";
import TreeChart from "./treeChart/TreeChart";

const Overview = ({stories}) => {
  return (
    <>
      <TreeChart stories={stories} />
    </>
  );
};

export default Overview;
