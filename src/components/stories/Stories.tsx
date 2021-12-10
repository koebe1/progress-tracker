import React, { useEffect, useState } from "react";
import { StoriesType } from "../../types";
import InputGroup from "./InputGroup";
import StoryList from "./StoryList";
import StorySelect from "./StorySelect";
import SubStoryList from "./SubStoryLis";

interface StoriesProps {
  stories: StoriesType;
  setStories: React.Dispatch<React.SetStateAction<{} | StoriesType>>;
  selectedStory: string;
  setSelectedStory: React.Dispatch<React.SetStateAction<string>>;
}

export const Stories = ({
  stories,
  setStories,
  selectedStory,
  setSelectedStory,
}: StoriesProps) => {
  // STATE

  const [subStoryInput, setSubStoryInput] = useState("");
  const [storyInput, setStoryInput] = useState("");

  // EVENT HANDLERS
  // STORY
  const handleStoryInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStoryInput(e.target.value);
  };

  const handleStorySubmit = (e: React.SyntheticEvent) => {
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

  const handleDeleteStory = (e: React.MouseEvent<HTMLButtonElement>) => {
    // delete story property of the clicked list item
    // --> read why the type cast on following line
    //  --> https://freshman.tech/snippets/typescript/fix-value-not-exist-eventtarget/
    const target = e.target as HTMLButtonElement;
    setStories((prev: StoriesType) => {
      delete prev[target.name];
      return {
        ...prev,
      };
    });
    // if selected story gets deleted
    // -> set selected to empty value

    if (target.name === selectedStory) {
      setSelectedStory("");
    }
  };

  const handleStoryCompletion = (story: string) => {
    // toggle done property
    setStories((prev: StoriesType) => ({
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
  const handleSubStoryInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSubStoryInput(e.target.value);
  };

  const handleSubStorySubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (
      Object.keys(stories).length > 0 &&
      subStoryInput.length > 0 &&
      selectedStory.length > 0
    ) {
      setStories((prev: StoriesType) => ({
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

  const handleDeleteSubStory = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;
    setStories((prev: StoriesType) => {
      delete prev[selectedStory].subStories[target.name];
      return {
        ...prev,
      };
    });
  };

  const handleSubStoryCompletion = (subStory: string) => {
    // toggle done property on substory
    setStories((prev: StoriesType) => ({
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
                  : {}
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
