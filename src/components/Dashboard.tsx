import React from "react";
import { BiGitRepoForked } from "react-icons/bi";
import { GiProgression } from "react-icons/gi";
import TreeChart from "./treeChart/TreeChart";

export const Dashboard = ({ stories }) => {
  return (
    <div className="content-container">
      <nav style={{ padding: "10px" }}>
        <BiGitRepoForked
          style={{
            fontSize: "30px",
            color: "#d3d3d3",
            cursor: "pointer",
            transform: "rotate(180deg)",
            border: "1px solid #d3d3d3",
            borderRadius: "4px",
            marginRight: "5px",
          }}
        />
        <GiProgression
          style={{
            fontSize: "30px",
            cursor: "pointer",
            color: "#777",
            border: "1px solid #d3d3d3",
            borderRadius: "4px",
          }}
        />
      </nav>
      <div className="tree flex-center">
        <TreeChart stories={stories} />
      </div>
    </div>
  );
};
