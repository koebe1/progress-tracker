import React, { useEffect, useState } from "react";
import StoryList from "./StoryList";

export const Stories = ({ user }) => {
  // STATE
  const [stories, setStories] = useState(null);
  const [subStoryInput, setSubStoryInput] = useState("");
  const [storyInput, setStoryInput] = useState("");

  // EVENT HANDLERS
  // STORY
  const handleStoryInput = (e) => {
    setStoryInput(e.target.value);
  };

  const handleStorySubmit = (e) => {
    e.preventDefault();
    // add new story with empty substory array to the story object
    if (storyInput !== "") {
      setStories((prevState) => ({
        ...prevState,

        [storyInput]: {
          done: false,
          subStories: [],
        },
      }));
      // empty input field
      setStoryInput("");
    }
  };

  const handleDeleteStory = (e) => {
    // delete story property of the clicked list item
    setStories((prev) => {
      delete prev[e.target.name];
      return {
        ...prev,
      };
    });
  };

  const handleStoryCompletion = (story) => {
    // toggle done property
    setStories((prev) => ({
      ...prev,
      [story]: {
        done: !prev[story]["done"],
      },
    }));
  };

  // SUBSTORY
  const handleSubStoryInput = (e) => {
    setSubStoryInput(e.target.value);
  };

  const handleSubStorySubmit = (e) => {};

  // SIDE EFFECTS
  // get initial story state
  useEffect(() => {
    const savedStories = JSON.parse(localStorage.getItem("stories"));
    setStories(savedStories);
  }, []);
  // save stories to local storage
  useEffect(() => {
    localStorage.setItem("stories", JSON.stringify(stories));
  }, [stories]);

  // DEBUGGING
  console.log(stories);

  return (
    <div>
      <div
        className="content-container"
        style={{ padding: "5px", minWidth: "480px" }}
      >
        {/* USER INPUT */}

        <div className="forms" style={{ display: "flex" }}>
          {/* STORY */}
          <form onSubmit={handleStorySubmit} style={{ marginRight: "10px" }}>
            <input
              value={storyInput}
              onChange={handleStoryInput}
              className="input"
              type="text"
              placeholder="add story"
            />
            <input
              className={`btn btn-outline-dark btn-sm ${
                !storyInput ? "disabled" : ""
              }`}
              style={{ boxShadow: "none" }}
              type="submit"
              value="add"
            />
          </form>

          {/* SUBSTORY */}
          <form onSubmit={handleSubStorySubmit}>
            <label style={{ marginLeft: "15px" }}>story</label>
            {/* render all stories as options for substories */}
            <select style={{ margin: "0 5px", width: "auto" }}>
              {stories
                ? Object.keys(stories).map((story) => (
                    <option key={story} value={story}>
                      {story}
                    </option>
                  ))
                : null}
            </select>
            <input
              value={subStoryInput}
              onChange={handleSubStoryInput}
              className="input"
              type="text"
              placeholder="add substory"
            />
            <input
              className={`btn btn-outline-dark btn-sm ${
                !subStoryInput ? "disabled" : ""
              }`}
              style={{ boxShadow: "none" }}
              type="submit"
              value="add"
            />
          </form>
        </div>
        {/* STORIES */}
        <StoryList
          stories={stories}
          handleDeleteStory={handleDeleteStory}
          handleStoryCompletion={handleStoryCompletion}
        />
        {/* no story exists */}
        {/* {user && !stories ? (
          <div className="flex-center-column glass-overlay">story is empty</div>
        ) : null} */}
      </div>
    </div>
  );
};
