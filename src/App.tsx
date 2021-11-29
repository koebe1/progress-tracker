import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
import { UserNameForm } from "./components/UserNameForm";

const App = ({ user, userName, handleNameChange, handleNameSubmit }) => {
  const navigate = useNavigate();

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

      <nav style={{ marginTop: "10px" }}>
        <button
          className="btn btn-dark"
          style={{ margin: "0 5px" }}
          onClick={() => navigate("/stories")}
        >
          Stories
        </button>
        <button className="btn btn-dark" onClick={() => navigate("/dashboard")}>
          Dashboard
        </button>
      </nav>
      <Outlet />
    </div>
  );
};

export default App;
