import React from "react";
import ExpenseTracker from "./transactions/pages/ExpenseTracker";
import Graph from "./transactions/components/Graph";
import Form from "./transactions/components/Form";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <ExpenseTracker />
      <div className="chart">
        <Graph />
        <Form />
      </div>
    </div>
  );
};

export default App;
