import React from "react";
import { useState } from "react";
import MyComponet from "../components/MyComponent";
import Image from "../components/Img";

import triz from "../assets/triz.jpg";
import dante from "../assets/dante.jpg";
import dan from "../assets/dan.jpg";
import dantriz from "../assets/dante-triz.jpg";

import "../styles/home.css";

function Home() {
  const [imgState, setImgState] = useState(dantriz);

  const imgList = [dantriz, dante, triz, dan];
  function getRandomIndexImg(max) {
    return Math.floor(Math.random() * max);
  }

  const handleButton = () => {
    const randomImg = getRandomIndexImg(4);
    setImgState(imgList[randomImg]);
  };

  return (
    <main>
      <Image>
        <img src={imgState} alt="Chihuahuas" />
      </Image>

      <figcaption>
        <img src={imgState} alt="Chihuahua" />
      </figcaption>

      <button onClick={handleButton}>Random Chihuahua image</button>
    </main>
  );
}

// function Home() {
//   let counter = 12;
//   const [counterState, setCounterState] = useState(12);

//   const handleButton = () => {
//     counter++;
//     console.log(counter)

//     setCounterState(counterState + 1);
// };

//   return (
//     <>
//       <MyComponet counter={counter} />
//       <MyComponet counter={counterState} />

//       <button onClick={handleButton}>Incrase by 1</button>
//     </>
//   );
// }

export default Home;
