import { useState } from "react";
import Header from "../components/Header";
import Home from "../pages/Home";
import About from "../pages/About";
import Games from "../pages/Games";

const Route = () => {
  const [route, setRoute] = useState("home");

  switch (route) {
    case "home":
      return (
        <>
          <Header setRoute={setRoute} />

          <Home />
        </>
      );

    case "about":
      return <About setRoute={setRoute} />;
    case "games":
      return <Games setRoute={setRoute} />;
    default:
      return <Home setRoute={setRoute} />;
  }
};

export default Route;
