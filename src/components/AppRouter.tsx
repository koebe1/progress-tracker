import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import App from "../App";
import Overview from "./dashboard/Overview";
import Progress from "./dashboard/Progress";
import { Dashboard } from "./dashboard/Dashboard";
import { Stories } from "./stories/Stories";
import { useLocalStorage } from "./utils/useLocalsStorage";

const AppRouter = () => {
  // STATE
  // custom hook handles saving and retrieving from local storage
  const [user, setUser] = useLocalStorage("user", "");
  const [stories, setStories] = useLocalStorage("stories", {});
  const [selectedStory, setSelectedStory] = useLocalStorage(
    "selectedStory",
    ""
  );
  const [userName, setUserName] = useState("");

  // EVENT HANDLERS
  // event: React.ChangeEvent<HTMLInputElement>
  const handleNameChange = (event) => {
    setUserName(event.target.value);
  };
  // event: React.FormEvent<HTMLButtonElement>
  const handleNameSubmit = (event) => {
    event.preventDefault();
    setUser(userName);
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
            element={
              <Stories
                stories={stories}
                setStories={setStories}
                selectedStory={selectedStory}
                setSelectedStory={setSelectedStory}
              />
            }
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
