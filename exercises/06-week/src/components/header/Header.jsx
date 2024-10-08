import { Link } from "react-router-dom";

import "./header.scss";

const Header = () => {
  return (
    <section className="headerContainer">
      <h1>Actividad 6</h1>
      <nav>
        <button>
          <Link to="/">Home</Link>
        </button>
        <button>
          <Link to="/products">Products</Link>
        </button>
      </nav>
    </section>
  );
};

export default Header;
