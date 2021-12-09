import React from "react";
import { BiGitRepoForked } from "react-icons/bi";
import { GiProgression } from "react-icons/gi";
import { Outlet, NavLink } from "react-router-dom";

export const Dashboard = () => {
  return (
    <div className="content-container">
      <nav style={{ padding: "10px" }}>
        <NavLink
          className={({ isActive }) =>
            isActive ? "btn shadow-none  disabled " : "btn shadow-none"
          }
          // className="btn btn-secondary"

          style={{ padding: "0 5px" }}
          to="/dashboard/overview"
        >
          <BiGitRepoForked
            style={{
              fontSize: "30px",
              color: "#777",
              cursor: "pointer",
              transform: "rotate(180deg)",
              border: "1px solid #d3d3d3",
              borderRadius: "4px",
              marginRight: "0px",
            }}
          />
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "btn shadow-none   disabled " : "btn shadow-none "
          }
          to="/dashboard/progress"
          style={{ padding: "0 5px" }}
        >
          <GiProgression
            style={{
              fontSize: "30px",
              cursor: "pointer",
              color: "#777",
              border: "1px solid #d3d3d3",
              borderRadius: "4px",
            }}
          />
        </NavLink>
      </nav>
      <div className="flex-center">
        <Outlet />
      </div>
    </div>
  );
};
