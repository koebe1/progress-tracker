import React, { useEffect } from "react";
import Select from "react-select";

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    minHeight: "30px",
    minWidth: "150px",
    height: "30px",
    border: "1px solid lightgrey",
    borderRadius: "4px",
    boxShadow: "none",
    "&:hover": {
      border: "1px solid lightgrey",
    },
  }),

  options: (provided) => ({
    height: "30px",
    minHeight: "30px",
  }),

  valueContainer: (provided, state) => ({
    ...provided,
    height: "30px",
    padding: "0 6px",
  }),

  input: (provided, state) => ({
    ...provided,
    margin: "0px",
  }),

  indicatorsContainer: (provided, state) => ({
    ...provided,
    height: "30px",
  }),
  drowdownIndicator: (provided, state) => ({
    ...provided,
    backgroundColor: "d3d3d3",
  }),
};

const StorySelect = ({ stories, handleSelectedStory, selectedStory }) => {
  // Mapping props
  const nStories = stories ? Object.keys(stories) : [];
  // eslint-disable-next-line
  const options = [];
  nStories.map((story) => options.push({ value: story, label: story }));

  // EVENT HANDLER
  const handleSelectChange = (selectedOption) => {
    handleSelectedStory(selectedOption.value);
  };

  // SIDE EFFECT
  // keep selectedOption and options in sync
  useEffect(() => {
    if (selectedStory) {
      if (!options.some((obj) => selectedStory === obj.value)) {
        handleSelectedStory("");
        localStorage.removeItem("selectedStory");
      }
    }
  }, [options, handleSelectedStory, selectedStory]);

  //   DEBUGGING
  //   console.log(`stories: ${stories}`);
  //   console.log(`selected Option: ${JSON.stringify(selectedOption)}`);
  //   console.log(`options: ${JSON.stringify(options)}`);

  return (
    <div style={{ marginRight: "50px" }}>
      <Select
        styles={customStyles}
        value={
          selectedStory ? { value: selectedStory, label: selectedStory } : null
        }
        placeholder="Select a story..."
        options={options}
        onChange={handleSelectChange}
      />
    </div>
  );
};

export default StorySelect;
