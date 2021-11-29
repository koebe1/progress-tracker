import React, { useEffect, useState } from "react";
import { Route, Routes, Redirect } from "react-router-dom";
import App from "../App";

import { Dashboard } from "./Dashboard";
import { Stories } from "./Stories";

const AppRouter = () => {
  // STATE
  const [user, setUser] = useState("");
  const [userName, setUserName] = useState("");

  // GET INIT STATE
  useEffect(() => {
    if (localStorage.getItem("user") !== null) {
      // ! tells typescript value is not going to be null
      // ---> non null assertion
      const savedUser = localStorage.getItem("user");
      setUser(savedUser);
    }
  }, []);

  // EVENT HANDLERS
  // event: React.ChangeEvent<HTMLInputElement>
  const handleNameChange = (event) => {
    setUserName(event.target.value);
  };
  // event: React.FormEvent<HTMLButtonElement>
  const handleNameSubmit = (event) => {
    event.preventDefault();
    setUser(userName);
    localStorage.setItem("user", userName);
  };

  return (
    <>
      <Routes>
        {/* APP */}
        <Route
          path="/"
          element={
            <App
              user={user}
              userName={userName}
              handleNameChange={handleNameChange}
              handleNameSubmit={handleNameSubmit}
              
            />
          }
        >
          {/* STORIES */}
          <Route path="/stories" element={<Stories user={user} />} />
          {/* DASHBOARD */}
          <Route path="/dashboard" element={<Dashboard user={user} />} />
        </Route>
        <Route path="*" element={<h1>404 ¯\_(ツ)_/¯ </h1>} />
      </Routes>
    </>
  );
};

export default AppRouter;
