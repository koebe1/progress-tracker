import React, { useEffect, useState } from "react";
import StoryList from "./StoryList";
import StorySelect from "./StorySelect";

export const Stories = ({ user }) => {
  // STATE
  const [stories, setStories] = useState({});
  const [subStoryInput, setSubStoryInput] = useState("");
  const [storyInput, setStoryInput] = useState("");
  const [selectedStory, setSelectedStory] = useState(null);

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
          subStories: {},
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

  // ADDS DUPLICATE SUBSTORIES AS OF RIGHT NOW
  const handleSubStorySubmit = (e) => {
    e.preventDefault();
    if (stories && selectedStory) {
      setStories((prev) => ({
        ...prev,
        [selectedStory]: {
          done: false,
          subStories: {
            ...prev[selectedStory].subStories,
            [subStoryInput]: {
              done: false,
            },
          },
        },
      }));
      setSubStoryInput("");
    }
  };

  // const handleDeleteSubStory = (e) => {
  //   setStories((prev) => ({
  //     ...prev,
  //     [selectedStory]: {
  //       // filter substories
  //       subStories: prev[selectedStory].subStories.filter(
  //         (substory) => substory !== e.target.name
  //       ),
  //     },
  //   }));
  // };

  // const handleStoryCompletion = (story) => {
  //   // toggle done property
  //   setStories((prev) => ({
  //     ...prev,
  //     [story]: {
  //       done: !prev[story]["done"],
  //     },
  //   }));
  // };

  // const handleSubStoryCompletion = (e) => {};

  // SIDE EFFECTS
  // get initial state from local storage
  useEffect(() => {
    const savedStories = JSON.parse(localStorage.getItem("stories"));
    setStories(savedStories);
    // setSelectedStory(savedSelectedStory);
  }, []);

  console.log(selectedStory);
  useEffect(() => {
    const savedSelectedStory = localStorage.getItem("selectedStory");
    setSelectedStory(savedSelectedStory);
  }, []);

  // save stories to local storage
  useEffect(() => {
    localStorage.setItem("stories", JSON.stringify(stories));
  }, [stories]);

  // DEBUGGING

  return (
    <div>
      <div className="content-container" style={{ padding: "5px" }}>
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
              style={{ boxShadow: "none", marginLeft: "5px" }}
              type="submit"
              value="add"
            />
          </form>

          {/* SUBSTORY */}
          <form onSubmit={handleSubStorySubmit} style={{ display: "flex" }}>
            {/* render all stories as options for substories */}

            {/* <select
              value={selectedStory}
              onChange={handleSelectedStory}
              style={{ margin: "0 5px", minWidth: "40px !important" }}
            >
            
              <option value="default" disabled hidden>
                story
              </option>
              

              {Object.keys(stories).map((story) => (
                <option key={story} value={story}>
                  {story}
                </option>
              ))}
            </select> */}

            <StorySelect
              stories={stories}
              selectedStory={selectedStory}
              handleSelectedStory={setSelectedStory}
              
            />

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
              style={{ boxShadow: "none", marginLeft: "5px" }}
              type="submit"
              value="add"
            />
          </form>
        </div>
        {/* STORIES */}
        <div className="story-container" style={{ display: "flex" }}>
          <StoryList
            stories={stories ? Object.keys(stories) : []}
            handleDeleteStory={handleDeleteStory}
            handleStoryCompletion={handleStoryCompletion}
          />

          {/* SUBSTORIES */}
          {/* <StoryList
            stories={
              selectedStory !== "default"
                ? Object.keys(stories[selectedStory]["subStories"])
                : []
            }
            handleDeleteStory={handleDeleteSubStory}
            handleStoryCompletion={handleStoryCompletion}
          /> */}
        </div>
        {/* no story exists */}
        {/* {user && !stories ? (
          <div className="flex-center-column glass-overlay">story is empty</div>
        ) : null} */}
      </div>
    </div>
  );
};

// Data Structure of stories

// stories = {
//    story1: {
//      done: false,
//      subStories: {
//        substory1: { done: false}
//      }
//    }
// }
