import React from "react";

const StoryList = ({
  stories,
  handleStoryCompletion,
  handleDeleteStory,
  selectedStory,
}) => {
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
                height: "100%",
                marginBottom: "20px",
                border: "1px solid red",
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
