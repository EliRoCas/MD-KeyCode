import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <p>Welcome to the About page!</p>

      <Link to="/">Go back to the Home page</Link>
    </div>
  );
};

export default About;
