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

  // SIDE EFFECTS
  // save stories to local storage
  useEffect(() => {
    localStorage.setItem("stories", JSON.stringify(stories));
  }, [stories]);

  return (
    <div>
      <div className="content-container" style={{ padding: "5px" }}>
        <form onSubmit={handleStorySubmit}>
          <input
            value={inputStory}
            onChange={handleInputStory}
            className="input"
            type="text"
            placeholder="add story"
          />
          <input
            className={`btn btn-outline-dark btn-sm`}
            style={{ boxShadow: "none" }}
            type="submit"
            value="add"
          />
        </form>
        <ul>
          {stories
            ? Object.keys(stories).map((story) => <li key={story}>{story}</li>)
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
