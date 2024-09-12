import { useState } from "react";
// import PropTypes from "prop-types";

const Button = () => {
  const [color, setColor] = useState("green");
  const [styleClass, setStyleClass] = useState("btn ");
  const [counter, setCounter] = useState(0);

  const handleButton = () => {
    if (color === "red") {
      console.log("Button is red");
      setColor("green");
      setStyleClass("btn");
      return;
    } else {
      console.log("Button clicked");
      setColor("red");
      setStyleClass("btn btn-red");
    }
  };

  const handleButtonApi = () => {
    (async () => {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const data = await response.json();
      console.log(data);
    })();
  };

  const count = (number) => {
    console.log("Counter", counter);
    setCounter(counter + number);
  };

  return (
    // <button onClick={handleButton} style={{ backgroundColor: color }}>
    <>
      <button onClick={handleButton} className={styleClass}>
        Event Button Capture
      </button>

      <button onClick={handleButtonApi}>API Call</button>

      <button onClick={()=> count(2)}> Button with params</button>
    </>
  );
};

Button.propTypes = {};

export default Button;
