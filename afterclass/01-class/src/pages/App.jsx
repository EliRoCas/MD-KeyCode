import { useEffect, useState } from "react";

import PropTypes from "prop-types";

const CardCharacter = ({ img, name, specie, location }) => {
  return (
    <article className="card">
      <figure>
        <img src={img} alt={name} />
      </figure>
      <article>
        <ul>
          <li>
            <strong>Name</strong>
            <span>{name}</span>
          </li>
          <li>
            <strong>Specie</strong>
            <span>{specie}</span>
          </li>
          <li>
            <strong>Location</strong>
            <span>{location.name}</span>
            <a href={location.url} target="_blanck">
              {location.url}
            </a>
          </li>
        </ul>
      </article>
    </article>
  );
};

CardCharacter.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  specie: PropTypes.string.isRequired,
  location: PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};

const App = () => {
  const URL = "https://rickandmortyapi.com/api/character";

  const [listCharacters, setListCharacters] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(URL);
      const data = await response.json();
      setListCharacters(data.results); // Se cambia el valor al resultado de la data
    })();
  }, []);

  return (
    <main className="container">
      <h1> Personajes de Rick and Morthy</h1>
      <section className="cards">
        {listCharacters.map((character, index) => {
          const { name, species, location, image } = character;

          return (
            <CardCharacter
              key={`${index}_${name}`}
              img={image}
              name={name}
              specie={species}
              location={location}
            />
          );
        })}
      </section>
    </main>
  );
};

export default App;
