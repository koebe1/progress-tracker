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
          borderBottom: "1px solid lightgrey",
          display: "flex",
          justifyContent: "flex-start",
        }}
      >
        <h1>
          <span className="heading gradient">Stories</span>
        </h1>
      </header>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "35px" }}
      >
        <h3>Hi {user}!</h3>
      </div>
    </div>
  );
};
