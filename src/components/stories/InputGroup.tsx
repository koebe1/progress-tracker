import React from "react";

interface InputGroupProps {
  storyInput: string;
  handleStoryInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

const InputGroup = ({ storyInput, handleStoryInput, placeholder }: InputGroupProps) => {
  return (
    <div className="input-group flex-center">
      <input
        value={storyInput}
        onChange={handleStoryInput}
        className="input"
        type="text"
        placeholder={placeholder}
        maxLength={20}
      />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          height: "30px",
          borderTop: "1px solid #d3d3d3",
          borderBottom: "1px solid #d3d3d3",
          zIndex: 98,
        }}
      >
        <div
          style={{
            height: "13px",
            width: "1px",
            backgroundColor: "#d3d3d3",
            zIndex: 98,
          }}
        ></div>
      </div>
      <input
        className={"btn btn-outline-secondary shadow-none add-button"}
        style={storyInput ? {} : { color: "#D3D3D3" }}
        type="submit"
        value="add"
      />
    </div>
  );
};

export default InputGroup;
