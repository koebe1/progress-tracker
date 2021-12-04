import React from "react";

const Progress = ({ stories }) => {
  return (
    <div style={{ width: "100%" }}>
      <ul
        style={{
          width: "100%",
          height: "50vh",
          margin: "0",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {Object.keys(stories).map((e) => (
          <li style={{ listStyle: "none", padding: "2.5vh 0" }}>
            {" "}
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <span style={{ marginRight: "10px", width: "80px" }}>{e}</span>
              <div
                style={{
                  background: "#d3d3d3",
                  height: "10px",
                  width: "100px",
                }}
              ></div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Progress;
