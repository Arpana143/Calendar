import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Calendar from "./components/Calendar";

function App() {
  const currentDate = new Date();
  return (
    <div className="App">
      <header className="App-header">
        <Calendar date={currentDate} />
      </header>
    </div>
  );
}

export default App;
