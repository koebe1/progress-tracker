import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav style={{ marginTop: "5px", position: "relative", right: "5px" }}>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "btn btn-outline-secondary  disabled nav-button"
            : "btn  btn-outline-dark nav-button"
        }
        // className="btn btn-secondary"

        style={{
          margin: "0 5px",
          boxShadow: "none",
          borderRadius: "4px",
        }}
        to="/stories"
      >
        Stories
      </NavLink>
      <NavLink
        to="/dashboard"
        className={({ isActive }) =>
          isActive
            ? "btn btn-outline-secondary disabled nav-button"
            : "btn  btn-outline-dark nav-button"
        }
        style={{ boxShadow: "none", borderRadius: "4px" }}
      >
        Dashboard
      </NavLink>
    </nav>
  );
};

export default Nav;
