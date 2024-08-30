import { useState } from "react";
import MyClassComponent from "../components/MyClassComponent";

function HomeClass() {
  const [showComponent, setShowComponet] = useState(true);

  const handleClick = () => {
    showComponent(!showComponent);
  };

  return (
    <>
      <h1>Class component</h1>
      <button onClick={handleClick}> Remove Component</button>

      <MyClassComponent />
    </>
  );
}

export default HomeClass;
