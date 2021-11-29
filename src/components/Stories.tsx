import React, { useState } from "react";

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
  const [stories, setStories] = useState(null);

  return (
    <div className="">
      
      <div className="content-container">
        {/* no story exists */}
        {user && !stories ? (
          <div className="flex-center-column glass-overlay">story is empty</div>
        ) : null}
      </div>
    </div>
  );
};
