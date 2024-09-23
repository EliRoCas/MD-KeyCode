import PropTypes from "prop-types";
import Site from "../components/layouts/Site";

const Home = () => {
  return (
    <>
      <Site>
        <h1>Home</h1>
        <section>
          <div className="card">
            <h2>Bla Bla Bla </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              adipisci modi harum eum soluta impedit, commodi, suscipit
              repellat, quaerat magnam quibusdam nemo iusto ratione ea
              reiciendis blanditiis at eius tempore.
            </p>
          </div>
        </section>
      </Site>
    </>
  );
};

Home.propTypes = {};

export default Home;
