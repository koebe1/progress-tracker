import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import App from "../App";

import { Dashboard } from "./Dashboard";
import Overview from "./Overview";
import Progress from "./Progress";
import { Stories } from "./Stories";

const AppRouter = () => {
  // STATE
  const [user, setUser] = useState("");
  const [userName, setUserName] = useState("");
  const [stories, setStories] = useState({});

  // GET INIT STATE
  useEffect(() => {
    if (localStorage.getItem("user").length > 0) {
      // ! tells typescript value is not going to be null
      // ---> non null assertion
      const savedUser = localStorage.getItem("user");
      setUser(savedUser);
    }
  }, []);

  // get initial state from local storage
  useEffect(() => {
    const savedStories = JSON.parse(localStorage.getItem("stories"));
    if (Object.keys(savedStories).length > 0) {
      setStories(savedStories);
    }
  }, [setStories]);

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
          <Route
            path="/stories"
            element={<Stories stories={stories} setStories={setStories} />}
          />
          {/* DASHBOARD */}
          <Route path="/dashboard" element={<Dashboard />}>
            <Route
              path="/dashboard/overview"
              element={<Overview stories={stories} />}
            />
            <Route
              path="/dashboard/progress"
              element={<Progress stories={stories} />}
            />
          </Route>
        </Route>
        <Route path="*" element={<h1>404 ¯\_(ツ)_/¯ </h1>} />
      </Routes>
    </>
  );
};

export default AppRouter;
