import React from "react";
import { StoriesType } from "../../types";

interface StoryListProps {
  stories: StoriesType;
  handleStoryCompletion: (story: string) => void;
  handleDeleteStory: (e: React.MouseEvent<HTMLButtonElement>) => void;
  selectedStory: string;
}

const StoryList = ({
  stories,
  handleStoryCompletion,
  handleDeleteStory,
  selectedStory,
}: StoryListProps) => {
  return (
    <ul style={{ width: "100%", padding: 0 }}>
      {stories
        ? Object.keys(stories)
            .filter((e) => e === selectedStory)
            .map((story) => (
              <div
                key={story}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                  height: "40vh",
                  marginBottom: "20px",
                }}
              >
                <div
                  className="list-item-container"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <li
                    className="story-item"
                    onClick={() => handleStoryCompletion(story)}
                    style={
                      stories[story].done
                        ? {
                            textDecoration: "line-through",
                          }
                        : {}
                    }
                  >
                    {story}
                  </li>
                  <button
                    name={story}
                    onClick={handleDeleteStory}
                    className="btn btn-sm"
                    style={{ boxShadow: "none" }}
                  >
                    ❌
                  </button>
                </div>

                <div
                  style={{
                    width: "1px",
                    height: "100%",
                    background: "linear-gradient(to top, #d9d9d9,#ffff)",
                  }}
                ></div>
              </div>
            ))
        : null}
    </ul>
  );
};

export default StoryList;
