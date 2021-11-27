import React from "react";

interface DashboardProps {}

export const Dashboard: React.FC<DashboardProps> = ({}) => {
  return (
    <div
      style={{
        marginLeft: "8px",
        marginTop: "8px",
        backgroundColor: "#FAFAFA",
        borderRadius: "10px",
      }}
    >
      <h5>Dashboard works!</h5>
    </div>
  );
};
