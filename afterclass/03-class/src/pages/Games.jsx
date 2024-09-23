import PropTypes from "prop-types";
import Site from "../components/layouts/Site";

const Games = () => {
  return (
    <>
      <Site>
        <h1>Games</h1>
        <section>
          <div className="card">
            <h2>Game 1</h2>
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

Games.propTypes = {};

export default Games;
