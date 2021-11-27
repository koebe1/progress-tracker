import React from "react";

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
    <form onSubmit={handleNameSubmit}>
      <input
        onChange={handleNameChange}
        value={userName}
        placeholder="Enter your Name!"
      />
    </form>
  );
};
