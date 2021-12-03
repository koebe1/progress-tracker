import React, { useRef, useEffect } from "react";
import { select } from "d3";
import useResizeObserver from "./useResizeObserver";

const TreeChart = ({ data }) => {
  const svgRef = useRef();
  const wrappedRef = useRef();
  const dimensions = useResizeObserver(wrappedRef);

  useEffect(() => {
    const svg = select(svgRef.current);
    if (!dimensions) return;
  }, [data, dimensions]);
  return (
    <div ref={wrappedRef}>
      <svg ref={svgRef}></svg>
    </div>
  );
};

export default TreeChart;
