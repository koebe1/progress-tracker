import React, { useRef, useEffect, useState } from "react";
import { select, hierarchy, tree, linkHorizontal } from "d3";
import useResizeObserver from "./useResizeObserver";

// maps stories to data format for d3
// -> data = {name: "name", children: {...}}
const mapStories = (stories) => {
  const data = {
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
      data.children.push({ name: story, children: subStories });
      // case story jas no substory
    } else {
      data.children.push({ name: story });
    }
  }
  return data;
};

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

const TreeChart = ({ stories }) => {
  const [data, setData] = useState({});

  const svgRef = useRef();
  const wrapperRef: any = useRef();
  const dimensions = useResizeObserver(wrapperRef);

  // listener to map stories to the needed d3 data structure
  useEffect(() => {
    setData(mapStories(stories));
  }, [stories]);

  // we save data to see if it changed
  const previouslyRenderedData = usePrevious(data);

  useEffect(() => {
    const svg = select(svgRef.current);

    // use dimensions from useResizeObserver,
    // but use getBoundingClientRect on initial render
    // (dimensions are null for the first render)
    const { width, height } =
      dimensions || wrapperRef.current.getBoundingClientRect();

    // transform hierarchical data
    const root = hierarchy(data);
    const treeLayout = tree().size([height, width]);

    const linkGenerator = linkHorizontal()
      .x((link) => link.y)
      .y((link) => link.x);

    // enrich hierarchical data with coordinates
    treeLayout(root);

    // links
    const enteringAndUpdatingLinks = svg
      .selectAll(".link")
      .data(root.links())
      .join("path")
      .attr("class", "link")
      .attr("d", linkGenerator)
      .attr("stroke-dasharray", function () {
        const length = this.getTotalLength();
        return `${length} ${length}`;
      })
      .attr("stroke", "#000")
      .attr("fill", "none")
      .attr("opacity", 0.1);

    if (data !== previouslyRenderedData) {
      enteringAndUpdatingLinks
        .attr("stroke-dashoffset", function () {
          return this.getTotalLength();
        })
        .transition()
        .duration(500)
        .delay((link) => link.source.depth * 700)
        .attr("stroke-dashoffset", 0);
    }

    // labels
    svg
      .selectAll(".label")
      .data(root.descendants())
      .join((enter) => enter.append("text").attr("opacity", 0))
      .attr("class", "label")
      .attr("x", (node) => node.y)
      .attr("y", (node) => node.x - 12)
      .attr("text-anchor", "middle")
      .attr("font-size", 4)
      .text((node) => node.data.name)
      .transition()
      .duration(500)
      .delay((node) => node.depth * 500)
      .attr("opacity", 1);

    // nodes
    svg
      .selectAll(".node")
      .data(root.descendants())
      .join((enter) => enter.append("circle").attr("opacity", 0))
      .attr("class", "node")
      .attr("cx", (node) => node.y)
      .attr("cy", (node) => node.x)
      .attr("r", 4)
      .transition()
      .duration(500)
      .delay((node) => node.depth * 500)
      .attr("opacity", 0.6)
      .attr("fill", "#000");
  }, [data, dimensions, previouslyRenderedData]);

  return (
    <div
      ref={wrapperRef}
      style={{
        height: "60vh",
        marginBottom: "20px",
      }}
    >
      <svg style={{ overflow: "visible" }} ref={svgRef}></svg>
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
