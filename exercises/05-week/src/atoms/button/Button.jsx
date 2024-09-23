import PropTypes from "prop-types";
import StyledButton from "./StyledButton";

const Button = ({ text, onClick, className, bgButtonColor, textColor }) => {
  return (
    <StyledButton
      className={className}
      bgButtonColor={bgButtonColor}
      onClick={onClick}
      textColor={textColor}
    >
      {text}
    </StyledButton>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  bgButtonColor: PropTypes.string,
  textColor: PropTypes.string,
};

export default Button;
