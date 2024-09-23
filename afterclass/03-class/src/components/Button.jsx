import PropTypes from "prop-types";

const Button = () => {
  const handlerButton = ({ text, setRoute }) => {
    const textLowerCase = text.toLowerCase();
    setRoute(textLowerCase);
  };

  return (
    <li>
      <button onClick={handlerButton}>{text}</button>
    </li>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  setRoute: PropTypes.func,
};

export default Button;
