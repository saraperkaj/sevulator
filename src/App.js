import React, { useState } from "react";

const App = () => {
  const [cal, setCal] = useState("");
  const [result, setResult] = useState("");

  const operators = ["/", "x", "+", "-", ".", "+/-"];

  const updateCal = (value) => {
    //limit the operations so that you dont see more than one in a row

    //if the last value is an operator and cal has nothing or the value is an operator and the last value was also an operator
    if (
      (operators.includes(value) && cal === "") ||
      (operators.includes(value) && operators.includes(cal.slice(-1)))
    ) {
      //then empty return so it wont do anything
      return;
    }
    setCal(cal + value);

    //if the last input was not an operator
    if (!operators.includes(value)) {
      //then eval() the cal and val and make it a string so that eval works
      setResult(eval(cal + value).toString());
    }
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

  const calculate = () => {
    setCal(eval(cal.toString()));
  };

  const delLast = () => {};

  const allClear = () => {};

  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          {result ? <span>({result})</span> : ""} {cal || "0"}
        </div>

        <div className="operators">
          <button onClick={() => updateCal("/")}>/</button>
          <button onClick={() => updateCal("x")}>x</button>
          <button onClick={() => updateCal("+")}>+</button>
          <button onClick={() => updateCal("-")}>-</button>

          <button>AC</button>
          <button>DEL</button>
        </div>

        <div className="mainNums">{createNums()}</div>

        <div className="nums">
          <button onClick={() => updateCal("0")}>0</button>
          <button onClick={() => updateCal(".")}>.</button>
          <button onClick={() => updateCal("-")}>+/-</button>

          <button onClick={calculate}>=</button>
        </div>
      </div>
    </div>
  );
};

export default App;
