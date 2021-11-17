import React, { useState } from "react";

const App = () => {
  const operators = ["/", "x", "+", "-", ".", "+/-"];

  const [result, setResult] = useState("");
  const [cal, setCal] = useState("");

  const updateCal = (input) => {
    //limit the operations so that you dont see more than one in a row

    //if the last input is an operator and cal has nothing or the input is an operator and the last input was also an operator
    if (
      (operators.includes(input) && cal === "") ||
      (operators.includes(input) && operators.includes(cal.slice(-1)))
    ) {
      //then empty return so it wont do anything
      return;
    }
    //
    setCal(cal + input);

    //if the last input was not an operator
    if (!operators.includes(input)) {
      //then eval() the cal and val and make it a string so that eval works
      //have to update code to not use eval()(whoops)
      setResult(eval(cal + input).toString());
    }
  };

  //add helper function for the logic of making a integer either negative or positve but we'll probably have to alter the display so that only one number shows up at a time so that way we can make whatever is on display negative or positive (*-1)

  const createNums = () => {
    const nums = [];

    for (let i = 1; i < 10; i++) {
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

  const delLast = () => {
    if (cal === "") {
      return;
    }
    const input = cal.slice(0, -1);
    setCal(input);
  };

  const allClear = () => {
    setCal(" ");
  };

  //maybe make a helper function so that the commas will show up when you enter a number like 1000000 so it'll show up as 1,000,000?

  return (
    <div className="App">
      <div className="sevulator">
        <div className="display">
          {result ? <span>({result})</span> : ""} {cal || "0"}
        </div>

        <div className="operators">
          <button onClick={() => updateCal("/")}>/</button>
          <button onClick={() => updateCal("x")}>x</button>
          <button onClick={() => updateCal("+")}>+</button>
          <button onClick={() => updateCal("-")}>-</button>

          <button onClick={allClear}>AC</button>
          <button onClick={delLast}>DEL</button>
        </div>

        <div className="mainNums">
          {createNums()}
          <button onClick={() => updateCal("0")}>0</button>
        </div>

        <div className="nums">
          <button onClick={() => updateCal(".")}>.</button>
          <button onClick={() => updateCal("-")}>+/-</button>

          <button onClick={calculate}>=</button>
        </div>
      </div>
    </div>
  );
};

export default App;
