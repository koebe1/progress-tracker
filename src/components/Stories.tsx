import React, { useEffect, useState } from "react";
import InputGroup from "./stories/InputGroup";
import StoryList from "./stories/StoryList";
import StorySelect from "./stories/StorySelect";
import SubStoryList from "./stories/SubStoryLis";

export const Stories = ({
  stories,
  setStories,
  selectedStory,
  setSelectedStory,
}) => {
  // STATE

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
          subStories: {},
        },
      }));
      // empty input field
      setStoryInput("");
      // set selectedStory if no story is selected
      if (selectedStory.length === 0) {
        setSelectedStory(storyInput);
      }
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
    // if selected story gets deleted
    // -> set selected to empty value

    if (e.target.name === selectedStory) {
      setSelectedStory("");
    }
  };

  const handleStoryCompletion = (story) => {
    // toggle done property
    setStories((prev) => ({
      ...prev,
      [story]: {
        done: !prev[story].done,
        subStories: {
          ...prev[story].subStories,
        },
      },
    }));
  };

  // SUBSTORY
  const handleSubStoryInput = (e) => {
    setSubStoryInput(e.target.value);
  };

  const handleSubStorySubmit = (e) => {
    e.preventDefault();
    if (
      Object.keys(stories).length > 0 &&
      subStoryInput.length > 0 &&
      selectedStory.length > 0
    ) {
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

  const handleDeleteSubStory = (e) => {
    setStories((prev) => {
      delete prev[selectedStory].subStories[e.target.name];
      return {
        ...prev,
      };
    });
  };

  const handleSubStoryCompletion = (subStory) => {
    // toggle done property on substory
    setStories((prev) => ({
      ...prev,
      [selectedStory]: {
        ...prev[selectedStory],
        subStories: {
          ...prev[selectedStory].subStories,
          [subStory]: {
            done: !prev[selectedStory].subStories[subStory].done,
          },
        },
      },
    }));
  };

  // SIDE EFFECTS
  // keep local storage and selectedStory in sync
  useEffect(() => {
    localStorage.setItem("selectedStory", selectedStory);
  }, [selectedStory]);

  // keep local storage and stories in sync
  useEffect(() => {
    localStorage.setItem("stories", JSON.stringify(stories));
  }, [stories]);

  return (
    <div>
      <div className="content-container" style={{ padding: "10px" }}>
        {/* USER INPUT */}

        <div className="forms" style={{ display: "flex" }}>
          {/* STORY */}
          <StorySelect
            stories={stories}
            selectedStory={selectedStory}
            handleSelectedStory={setSelectedStory}
          />
          <form
            onSubmit={handleStorySubmit}
            style={{
              marginRight: "5px",
            }}
          >
            <InputGroup
              storyInput={storyInput}
              handleStoryInput={handleStoryInput}
              placeholder={"Add a story..."}
            />
          </form>

          {/* SUBSTORY */}
          <form
            onSubmit={handleSubStorySubmit}
            style={{ display: "flex", alignItems: "center" }}
          >
            {/* render all stories as options for substories */}

            <InputGroup
              storyInput={subStoryInput}
              handleStoryInput={handleSubStoryInput}
              placeholder={"Add a substory..."}
            />
          </form>
        </div>
        {/* STORIES */}
        <div
          className="story-container"
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "20px",
            minHeight: "50vh",
          }}
        >
          <div style={{ width: "31.5%" }}>
            <StoryList
              stories={stories}
              handleDeleteStory={handleDeleteStory}
              handleStoryCompletion={handleStoryCompletion}
              selectedStory={selectedStory}
            />
          </div>

          {/* SUBSTORIES */}
          <div style={{ width: "82.5%" }}>
            <SubStoryList
              stories={
                Object.keys(stories).length > 0 && selectedStory.length > 0
                  ? stories[selectedStory].subStories
                  : []
              }
              handleDeleteStory={handleDeleteSubStory}
              handleStoryCompletion={handleSubStoryCompletion}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
