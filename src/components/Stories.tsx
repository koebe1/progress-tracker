import React, { useEffect, useState } from "react";

// story data structure
// const stories = {
//   storyOne: {
//     subStories: ["subStoryOne", "subStoryTwo"]
//   },
//   storyTwo: {
//     subStories: ["subStoryOne", "subStoryTwo"]
//   }
// }

// set new story
// setStories((prevState) => ({
//   ...prevState,
//   storyOne: {
//     subStories: [],
//   },
// }));

// set new sub story
// setStories(prev => prev.storyOne.subStories.push("subStoryOne"))

export const Stories = ({ user }) => {
  // STATE
  const [stories, setStories] = useState(null);
  const [inputStory, setInputStory] = useState("");

  // EVENT HANDLERS
  const handleInputStory = (e) => {
    setInputStory(e.target.value);
  };

  const handleStorySubmit = (e) => {
    e.preventDefault();
    // add new story with empty substory array to the story object
    if (inputStory !== "") {
      setStories((prevState) => ({
        ...prevState,
        [inputStory]: {
          subStories: [],
        },
      }));
      // empty input field
      setInputStory("");
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

  return (
    <div>
      <div className="content-container" style={{ padding: "5px" }}>
        {/* USER INPUT */}
        <form onSubmit={handleStorySubmit}>
          <input
            value={inputStory}
            onChange={handleInputStory}
            className="input"
            type="text"
            placeholder="add story"
          />
          <input
            className={`btn btn-outline-dark btn-sm ${
              !inputStory ? "disabled" : ""
            }`}
            style={{ boxShadow: "none" }}
            type="submit"
            value="add"
          />
        </form>
        {/* STORIES */}
        <ul>
          {stories
            ? Object.keys(stories).map((story) => (
                <div
                  key={story}
                  style={{
                    width: "90px",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <li>{story}</li>
                  <button
                    name={story}
                    onClick={handleDeleteStory}
                    className="btn btn-sm"
                    style={{ boxShadow: "none" }}
                  >
                    ❌
                  </button>
                </div>
              ))
            : null}
        </ul>
        {/* no story exists */}
        {/* {user && !stories ? (
          <div className="flex-center-column glass-overlay">story is empty</div>
        ) : null} */}
      </div>
    </div>
  );
};
