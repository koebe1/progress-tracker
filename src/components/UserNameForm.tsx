import React, { SyntheticEvent } from "react";

// NEEDS REFACTORING
interface UserNameFormProps {
  handleNameSubmit: (e: SyntheticEvent) => void;
  handleNameChange: (e: SyntheticEvent) => void;
  userName: string;
}

export const UserNameForm: React.FC<UserNameFormProps> = ({
  handleNameSubmit,
  handleNameChange,
  userName,
}) => {
  return (
    <div
      className="flex-center-column glass-overlay "
      style={{ top: "0px", height: "100vh", width: "100vw" }}
    >
      <div style={{ width: "70%" }}>
        <p style={{ textAlign: "center", fontSize: "16px" }}>
          Hi there and welcome to{" "}
          <strong style={{ fontSize: "16px" }}>Stories</strong> 🙌!
          <br />
          At Stories we believe that every task or learning goal is a small part
          of your story on getting closer were you want to be in life ⛰.
          <br />
          That's why we help you to track and visualize your progress on your
          daily tasks ✔ .
          <br />
          <br />
          Just type in your name and hit enter!
        </p>
      </div>
      <form onSubmit={handleNameSubmit}>
        <input
          style={{
            width: "150px",
            fontSize: "16px",
            textAlign: "center",
          }}
          className="input"
          onChange={handleNameChange}
          value={userName}
          placeholder="Enter your name..."
        />
      </form>
    </div>
  );
};
