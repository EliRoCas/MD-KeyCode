import { Outlet } from "react-router-dom";

const GlobalLayout = () => {
  return (
    <>
      <header>
        <h1>Global Layout</h1>
      </header>
      <Outlet />

      <footer>
        <p>Footer</p>
      </footer>
    </>
  );
};

export default GlobalLayout;
