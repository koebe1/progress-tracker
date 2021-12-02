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
        <h3 style={{ fontSize: "20px", fontWeight: "800" }}>Hi {user}!</h3>
      </div>
    </div>
  );
};
