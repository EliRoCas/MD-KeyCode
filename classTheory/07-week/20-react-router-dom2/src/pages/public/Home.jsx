import { Link, useSearchParams } from "react-router-dom";

const Home = () => {
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("name"));
  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to the Home page!</p>

      <Link to="/about">Go to the About page</Link>
    </div>
  );
};

export default Home;
