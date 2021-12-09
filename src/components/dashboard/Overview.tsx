import React from "react";
import TreeChart from "./TreeChart";

const Overview = ({stories}) => {
  return (
    <>
      <TreeChart stories={stories} />
    </>
  );
};

export default Overview;
