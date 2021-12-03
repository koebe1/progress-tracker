import React, { useRef, useEffect, useState } from "react";
import { select, hierarchy } from "d3";
import useResizeObserver from "./useResizeObserver";

// maps stories to data format for d3
// -> data = {name: "name", children: {...}}
const mapStories = (stories) => {
  const data = {
    name: "Your Stories",
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
      data.children.push({ name: story, children: subStories });
      // case story jas no substory
    } else {
      data.children.push({ name: story });
    }
  }
  return data;
};

const TreeChart = ({ stories }) => {
  const [data, setData] = useState({});

  const svgRef = useRef();
  const wrappedRef = useRef();
  const dimensions = useResizeObserver(wrappedRef);

  useEffect(() => {
    setData(mapStories(stories));
  }, [stories]);

  useEffect(() => {
    const svg = select(svgRef.current);
    if (!dimensions) return;

    const root = hierarchy(data);
  }, [data, dimensions]);
  return (
    <div ref={wrappedRef}>
      <svg ref={svgRef}></svg>
    </div>
  );
};

export default TreeChart;

// const data = {
//     name: "Your Stories",
//     children: [
//         {
//             name: "story1",
//             children: [
//                 {
//                     name: "subStory1"
//                 }
//             ]
//     }
//  ]
// }
