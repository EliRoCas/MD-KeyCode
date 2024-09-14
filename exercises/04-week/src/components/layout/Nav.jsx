import PropTypes from "prop-types";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Nav.scss";

const Nav = ({ setShowComponent, showComponent }) => {
  return (
    <>
      <div className="tab">
        <button
          className={`tablinks ${showComponent ? "active" : ""}`}
          onClick={() => {
            setShowComponent(true);
          }}
        >
          Agregar Tarea
        </button>

        <button
          className={`tablinks ${!showComponent ? "active" : ""}`}
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
  showComponent: PropTypes.bool.isRequired,
};

export default Nav;
