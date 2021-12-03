import React from "react";

export const Dashboard = ({ stories }) => {
  return (
    <div className="content-container">
      <div className="tree flex-center">{JSON.stringify(stories)}</div>
    </div>
  );
};
