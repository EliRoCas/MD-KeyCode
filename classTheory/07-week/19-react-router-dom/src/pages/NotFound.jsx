import { Link } from "react-router-dom";
import img from "../assets/404.jpg";

const NotFound = () => {
  return (
    <div>
      <button>
        <Link to="/">Go back</Link>
      </button>
      <img src={img} alt="404" />
    </div>
  );
};

export default NotFound;
