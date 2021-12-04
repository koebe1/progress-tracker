import React, { useRef, useLayoutEffect, useState } from "react";
import { motion } from "framer-motion";

const Progress = ({ stories }) => {
  const progressRef: any = useRef();

  const [dimensions, setDimensions] = useState({ width: 0 });

  useLayoutEffect(() => {
    if (progressRef.current) {
      setDimensions({
        width: progressRef.current.offsetWidth,
      });
    }
  }, []);

  return (
    <div ref={progressRef} style={{ width: "100%" }}>
      <ul
        style={{
          width: "100%",
          height: "50vh",
          margin: "0",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {Object.keys(stories).map((story) => {
          let progress = 0;
          // story is marked as done
          if (stories[story].done) {
            progress = 100;
            // count subStories and done subStories
          } else {
            let subStoryCounter = 0;
            let doneCounter = 0;
            // loop through substorys
            for (let subStory of Object.keys(stories[story].subStories)) {
              subStoryCounter++;
              console.log(subStory);

              if (stories[story].subStories[subStory].done) {
                doneCounter++;
              }
              progress = (doneCounter / subStoryCounter) * 100;
            }
          }
          console.log(progress);
          return (
            <li key={story} style={{ listStyle: "none", padding: "2vh 0" }}>
              {" "}
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                <span style={{ marginRight: "10px", width: "80px" }}>
                  {story}
                </span>
                <div
                  className="progress-bar-container"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    width: "78%",
                  }}
                >
                  <motion.div
                    style={{ width: "0%" }}
                    className="progress-bar"
                    // ref is 100% of the container divs width
                    // progress bar gets calculated on the basis of that
                    animate={{
                      width: (dimensions.width / 160) * Math.round(progress),
                    }}
                    transition={{ duration: 0.5 }}
                  ></motion.div>
                  <span>{Math.round(progress)}%</span>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Progress;
