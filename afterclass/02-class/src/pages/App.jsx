import { useState, createContext } from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "../../public/vite.svg";
import ContainerCard from "../components/info/ContainerCard.jsx";

export const CountContext = createContext();

function App() {
  const [count, setCount] = useState(0);
  const list = [
    {
      title: "React",
      description: "This is the card for REACT",
      img: reactLogo,
      increment: 1,
    },
    {
      title: "Vite",
      description: "This is the VITE card",
      img: viteLogo,
      increment: 5,
    },
  ];

  const valueContext = { state: { count, setCount }, list: list };
  return (
    <>
      <CountContext.Provider value={valueContext}>
        <h1>Count with cards and UseContext</h1>

        <div className="container">
          <span>{count}</span>
        </div>

        <ContainerCard />
      </CountContext.Provider>
    </>
  );
}

export default App;
