import PropTypes from "prop-types";
import StyledButton from "./StyledButton";

const Button = ({ text, onClick, className, bgColor }) => {
  return (
    <StyledButton className={className} bgColor={bgColor} onClick={onClick}>
      {text}
    </StyledButton>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  bgColor: PropTypes.string,
};

export default Button;
