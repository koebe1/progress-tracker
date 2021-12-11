import React, { SyntheticEvent } from "react";
import { Outlet } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
import { UserNameForm } from "./components/UserNameForm";
import Nav from "./components/Nav";

interface AppProps {
  user: string;
  userName: string;
  handleNameChange: (e: SyntheticEvent) => void;
  handleNameSubmit: (e: SyntheticEvent) => void;
}

const App = ({
  user,
  userName,
  handleNameChange,
  handleNameSubmit,
}: AppProps) => {
  return (
    <div>
      {/* show name form if there is no user yet */}
      {!user ? (
        <UserNameForm
          handleNameSubmit={handleNameSubmit}
          handleNameChange={handleNameChange}
          userName={userName}
        />
      ) : null}
      <Header user={user} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div>
          <Nav />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default App;
