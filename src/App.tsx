import React from "react";
import "./App.css";

const App: React.FC = () => {
  return (
    <div>
      <header style={{ borderBottom: "1px solid grey" }}>
        <h1>Stories</h1>
        <h3>Hi </h3>
      </header>
      <nav>
        <button>Stories</button>
        <button>Dashboard</button>
      </nav>
    </div>
  );
};

export default App;
