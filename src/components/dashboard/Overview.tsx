import React from "react";
import TreeChart from "./TreeChart";
import { StoriesProps } from "../../types";

const Overview = ({ stories }: StoriesProps) => {
  return (
    <>
      <TreeChart stories={stories} />
    </>
  );
};

export default Overview;
