import React from "react";

interface StoriesProps {}

export const Stories: React.FC<StoriesProps> = ({}) => {
  return (
    <div
      style={{
        marginLeft: "8px",
        marginTop: "8px",
        backgroundColor: "#FAFAFA",
        borderRadius: "10px",
      }}
    >
      <h5>stories works!</h5>
    </div>
  );
};
