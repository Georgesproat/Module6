import React, { useState } from "react";
import "../Calculator.css";

const Calculator = () => {
  const [display, setDisplay] = useState("");
  const [operator, setOperator] = useState("");
  const [result, setResult] = useState("");

  const handleButtonClick = (value) => {
    if (value === "=") {
      calculateResult();
    } else if (value === "C") {
      clearDisplay();
    } else if (value === "." && display.includes(".")) {
      
      return;
    } else {
      setDisplay(display + value);
    }
  };

  const calculateResult = () => {
    if (operator && display !== "") {
      setResult(eval(display).toString());
    }
  };

  const clearDisplay = () => {
    setDisplay("");
    setOperator("");
    setResult("");
  };

  const handleOperatorClick = (newOperator) => {
    if (display !== "" && operator === "") {
      setOperator(newOperator);
      setDisplay(display + newOperator);
    } else if (display !== "" && operator !== "") {
      
      setOperator(newOperator);
      setDisplay(display.slice(0, -1) + newOperator);
    }
  };

  return (
    <div className="calculator">
      <h1>Simple Calculator</h1>
      <div className="display">{display || "0"}</div>
      <div className="button-container">
        <button onClick={() => handleButtonClick("7")}>7</button>
        <button onClick={() => handleButtonClick("8")}>8</button>
        <button onClick={() => handleButtonClick("9")}>9</button>
        <button onClick={() => handleOperatorClick("/")}>/</button>
        <button onClick={() => handleButtonClick("4")}>4</button>
        <button onClick={() => handleButtonClick("5")}>5</button>
        <button onClick={() => handleButtonClick("6")}>6</button>
        <button onClick={() => handleOperatorClick("*")}>*</button>
        <button onClick={() => handleButtonClick("1")}>1</button>
        <button onClick={() => handleButtonClick("2")}>2</button>
        <button onClick={() => handleButtonClick("3")}>3</button>
        <button onClick={() => handleOperatorClick("-")}>-</button>
        <button onClick={() => handleButtonClick("0")}>0</button>
        <button onClick={() => handleButtonClick(".")}>.</button>
        <button onClick={() => handleButtonClick("C")}>C</button>
        <button onClick={() => handleOperatorClick("+")}>+</button>
        <button onClick={() => handleButtonClick("=")}>=</button>
      </div>
      {result !== "" && <p className="result">Result: {result}</p>}
    </div>
  );
};

export default Calculator;
