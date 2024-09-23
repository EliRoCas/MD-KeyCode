import PropTypes from "prop-types";
import StyledDescription from "./StyledDescription";

const Description = ({ text }) => {
  return <StyledDescription>{text}</StyledDescription>;
};

Description.propTypes = {
  text: PropTypes.string,
};

export default Description;
