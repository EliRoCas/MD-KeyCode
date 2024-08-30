import React from "react";
import { useState } from "react";

const HomeConditional = () => {
  const [state, setstate] = useState();

  const handleButton = () => {
    setstate(!state);
  };
  return (
    <div>
      <h1>Home Conditional</h1>

      <button onClick={handleButton}>Show</button>

     {state ? <conditionalComponent/> : null}

    </div>
  );
};

export default HomeConditional;
