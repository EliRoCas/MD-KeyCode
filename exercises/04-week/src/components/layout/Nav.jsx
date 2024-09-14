import PropTypes from "prop-types";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Nav.scss";

const Nav = ({ setShowComponent }) => {
  return (
    <>
      <div className="tab">
        <button
          className="tablinks"
          onClick={() => {
            setShowComponent(true);
          }}
        >
          Agregar Tarea
        </button>

        <button
          className="tablinks"
          onClick={() => {
            setShowComponent(false);
          }}
        >
          Ver Tareas
        </button>
      </div>
    </>
  );
};

Nav.propTypes = {
  setShowComponent: PropTypes.func.isRequired,
};

export default Nav;
