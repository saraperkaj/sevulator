import React, { useState } from "react";

const App = () => {
  const [cal, setCal] = useState("");
  const [result, setResult] = useState("");

  const operators = ["/", "x", "+", "-", ".", "%"];

  const updateCal = (value) => {
    setCal(cal + value);
  };

  const createNums = () => {
    const nums = [];

    for (let i = 1; i < 10; i++) {
      //uuggghhhh needed to add the onClick to this button as well! cant believe i forgrt ),:<
      nums.push(
        <button onClick={() => updateCal(i.toString())} key={i}>
          {i}
        </button>
      );
    }

    return nums;
  };

  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          {result ? <span>(0)</span> : ""} {cal || "0"}
        </div>

        <div className="operators">
          <button onClick={() => updateCal("/")}>/</button>
          <button onClick={() => updateCal("x")}>x</button>
          <button onClick={() => updateCal("+")}>+</button>
          <button onClick={() => updateCal("-")}>-</button>

          <button>DEL</button>
        </div>

        <div className="mainNums">{createNums()}</div>

        <div className="nums">
          <button onClick={() => updateCal("0")}>0</button>
          <button onClick={() => updateCal(".")}>.</button>
          <button onClick={() => updateCal("%")}>%</button>

          <button>=</button>
        </div>
      </div>
    </div>
  );
};

export default App;
