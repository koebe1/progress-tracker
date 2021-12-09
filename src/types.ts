// STORY TYPE
interface SubStoryType {
  done: boolean;
}

export interface SubStoriesType {
  [k: string]: SubStoryType;
}

interface StoryType {
  done: boolean;
  subStories: SubStoriesType;
}

export interface StoriesType {
  [k: string]: StoryType;
}

export interface StoriesProps {
  stories: StoriesType;
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
