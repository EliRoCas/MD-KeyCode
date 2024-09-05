import { useState } from "react";

const UseState = () => {
  const [variable, setVariable] = useState("Start Value");
  setVariable("New Value");
  let variable2 = "Start Value";
  return (
    <div>
      {variable} {variable2}
    </div>
  );
};

export default UseState;
