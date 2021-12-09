// STORY TYPE
interface SubStory {
  done: boolean;
}

export interface SubStories {
  [k: string]: SubStory;
}

interface Story {
  done: boolean;
  subStories: SubStories;
}

export interface Stories {
  [k: string]: Story;
}

export interface StoriesProps {
  stories: Stories;
}

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
