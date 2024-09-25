import "./nav.scss";    
import ItemNav from "./ItemNav";


const Nav = () => {
  return (
    <nav className="nav">
      <ul>
        <ItemNav route="/" text={"Home"}/>
        <ItemNav route="/about" text={"About"}/>
      </ul>
    </nav>
  );
};

export default Nav;
