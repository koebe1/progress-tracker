import React from "react";

interface HeaderProps {
  user: null | string;
}

export const Header: React.FC<HeaderProps> = ({ user }) => {
  return (
    <div style={{ margin: "0 5px" }}>
      <header
        className=""
        style={{
          // borderBottom: "1px solid #d9d9d9",
          // borderImage: "linear-gradient(to left, #d9d9d9, #f6f2f2) 100",
          display: "flex",
          justifyContent: "flex-start",
        }}
      >
        <h1>
          <span className="heading">Stories</span>
        </h1>
      </header>
      {/* border div */}
      <div
        style={{
          height: "1px",
          background: "linear-gradient(to right, #d9d9d9,#ffff)",
        }}
      ></div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "35px" }}
      >
        <h3>Hi {user}!</h3>
      </div>
    </div>
  );
};
