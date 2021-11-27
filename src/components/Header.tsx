import React from "react";

interface HeaderProps {
  user: null | string;
}

export const Header: React.FC<HeaderProps> = ({ user }) => {
  return (
    <header style={{ borderBottom: "1px solid grey" }}>
      <h1>Stories</h1>
      <h3>Hi {user}</h3>
    </header>
  );
};
