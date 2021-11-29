import React from "react";

// NEEDS REFACTORING
interface UserNameFormProps {
  handleNameSubmit: any;
  handleNameChange: any;
  userName: any;
}

export const UserNameForm: React.FC<UserNameFormProps> = ({
  handleNameSubmit,
  handleNameChange,
  userName,
}) => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "rgba(255, 255, 255, .15)",
        backdropFilter: "blur(5px)",
      }}
    >
      <div style={{ width: "70%" }}>
        <p style={{ textAlign: "center" }}>
          Hi there and welcome to <strong>Stories</strong> 🙌!
          <br />
          At Stories we believe that every task or learning goal is a small part
          of your story on getting closer were you want to be in life ⛰.
          <br />
          That's why we help you to track and visualize your progress on your
          daily tasks ✔ .
          <br />
          <br />
          Just enter your name and let's go!
        </p>
      </div>
      <form onSubmit={handleNameSubmit}>
        <input
          className="input"
          // style={{
          //   padding: "4px",
          //   outline: "none",
          //   border: "none",
          //   borderRadius: "4px",
          //   boxShadow: "rgba(99, 99, 99, 0.15) 0px 2px 8px 0px",
          // }}
          onChange={handleNameChange}
          value={userName}
          placeholder="Enter your name"
        />
      </form>
    </div>
  );
};
