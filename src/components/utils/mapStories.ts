import { StoriesType } from "./../../types";

// maps stories to data format for d3
// STORY SHAPE
// const stories = {
//   story1: {
//     done: false,
//     subStories: {
//       subStory1: {
//         done: false,
//       },
//     },
//   },
// };
// DATA SHAPE
// data = {
//   name: "name1",
//   children: [{ name: "name2" }],
// };

interface dataType {
  name: string;
  children?: dataType[];
}

export const mapStories = (stories: StoriesType) => {
  const data: dataType = {
    name: "Stories:",
    children: [],
  };

  for (let story in stories) {
    // case: story has a substory
    if (Object.keys(stories[story].subStories).length > 0) {
      const subStories = [];
      // loop through substories
      for (let subStory in stories[story].subStories) {
        subStories.push({ name: subStory });
      }

      if (!data.children) {
        return;
      }
      data.children.push({ name: story, children: subStories });
      // case story has no substory
    } else {
      if (!data.children) {
        return;
      }
      data.children.push({ name: story });
    }
  }
  return data;
};
