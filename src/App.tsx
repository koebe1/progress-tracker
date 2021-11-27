import React, { useState, useEffect } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
import { UserNameForm } from "./components/UserNameForm";

const App: React.FC = () => {
  // STATE
  const [user, setUser] = useState("");
  const [userName, setUserName] = useState("");

  const navigate = useNavigate();

  // GET INIT STATE
  useEffect(() => {
    if (localStorage.getItem("user") !== null) {
      // ! tells typescript value is not going to be null
      // ---> non null assertion
      const savedUser = localStorage.getItem("user")!;
      setUser(savedUser);
    }
  }, []);

  // EVENT HANDLERS
  const handleNameChange = (event: any) => {
    setUserName(event.target.value);
  };
  const handleNameSubmit = (event: any) => {
    event.preventDefault();
    setUser(userName);
    localStorage.setItem("user", userName);
  };

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
