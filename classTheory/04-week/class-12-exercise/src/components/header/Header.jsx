import PropTypes from "prop-types";

import ButtonAtomic from "./components/ButtonAtomic";

const Header = ({ setShowComponent }) => {
  return (
    <header>
      <nav>
        <ul>
          <ButtonAtomic
            text="Agregar Tarea"
            value={true}
            setShowComponent={setShowComponent}
          />
          <ButtonAtomic
            text="Ver Tareas"
            value={false}
            setShowComponent={setShowComponent}
          />
        </ul>
      </nav>
    </header>
  );
};

Header.propTypes = {
  setShowComponent: PropTypes.func.isRequired,
};

export default Header;
