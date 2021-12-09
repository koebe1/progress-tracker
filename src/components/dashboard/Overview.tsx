import React, { FunctionComponent } from "react";
import TreeChart from "./TreeChart";
import { Stories } from "../../types";

const Overview = ({ stories }: Stories) => {
  return (
    <>
      <TreeChart stories={stories} />
    </>
  );
};

export default Overview;
