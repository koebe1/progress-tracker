import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import App from "../App";
import Overview from "./Overview";
import Progress from "./Progress";
import { Dashboard } from "./Dashboard";
import { Stories } from "./Stories";

const AppRouter = () => {
  // STATE
  const savedUser = localStorage.getItem("user");
  const [user, setUser] = useState(
    savedUser && savedUser.length > 0 ? savedUser : ""
  );
  const [userName, setUserName] = useState("");
  
  // get init story state from local storage or set it to an empty object
  const savedStories = localStorage.getItem("stories")
    ? JSON.parse(localStorage.getItem("stories"))
    : null;

  const [stories, setStories] = useState(
    savedStories && Object.keys(savedStories).length > 0 ? savedStories : {}
  );

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
