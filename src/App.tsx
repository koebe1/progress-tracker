import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
import { UserNameForm } from "./components/UserNameForm";

const App = ({ user, userName, handleNameChange, handleNameSubmit }) => {
  return (
    <div>
      <Header user={user} />
      {/* show name form if there is no user yet */}
      {!user ? (
        <UserNameForm
          handleNameSubmit={handleNameSubmit}
          handleNameChange={handleNameChange}
          userName={userName}
        />
      ) : null}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div>
          <nav style={{ marginTop: "5px", position: "relative", right: "5px" }}>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "btn btn-outline-secondary  disabled"
                  : "btn  btn-outline-secondary"
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
                  ? "btn btn-outline-secondary  disabled"
                  : "btn  btn-outline-secondary"
              }
              style={{ boxShadow: "none", borderRadius: "4px" }}
            >
              Dashboard
            </NavLink>
          </nav>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default App;
