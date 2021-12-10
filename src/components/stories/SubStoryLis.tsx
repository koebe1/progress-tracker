import React from "react";
import {  SubStoriesType } from "../../types";

interface SubStoryListProps {
  stories: SubStoriesType;
  handleStoryCompletion: (story: string) => void;
  handleDeleteStory: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const SubStoryList = ({
  stories,
  handleStoryCompletion,
  handleDeleteStory,
}: SubStoryListProps) => {
  return (
    <ul style={{ width: "100%", padding: 0 }}>
      {stories
        ? Object.keys(stories).map((story) => (
            <div
              key={story}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                height: "10vh",
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
                  className="sub-story-item"
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
            </div>
          ))
        : null}
    </ul>
  );
};

export default SubStoryList;
