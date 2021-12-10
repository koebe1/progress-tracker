import React, { CSSProperties, useEffect } from "react";
import Select from "react-select";
import { StoriesType } from "../../types";

const customStyles: any = {
  control: (provided: CSSProperties) => ({
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

  options: () => ({
    height: "30px",
    minHeight: "30px",
  }),

  valueContainer: (provided: CSSProperties) => ({
    ...provided,
    height: "30px",
    padding: "0 6px",
  }),

  input: (provided: CSSProperties) => ({
    ...provided,
    margin: "0px",
  }),

  indicatorsContainer: (provided: CSSProperties) => ({
    ...provided,
    height: "30px",
  }),
  drowdownIndicator: (provided: CSSProperties) => ({
    ...provided,
    backgroundColor: "d3d3d3",
  }),
};

interface StorySelectProps {
  stories: StoriesType;
  handleSelectedStory: React.Dispatch<React.SetStateAction<string>>;
  selectedStory: string;
}

const StorySelect = ({
  stories,
  handleSelectedStory,
  selectedStory,
}: StorySelectProps) => {
  // Mapping props
  const nStories = stories ? Object.keys(stories) : [];
  // eslint-disable-next-line
  const options: { value: string; label: string }[] = [];
  nStories.map((story) => options.push({ value: story, label: story }));

  // EVENT HANDLER
  const handleSelectChange = (selectedOption: any) => {
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
