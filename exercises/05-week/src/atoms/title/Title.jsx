import PropTypes from "prop-types";
import StyledTitle from "./StyledTitle";

const Title = ({ title, fontSize, margin, padding}) => {
  return <StyledTitle fontSize={fontSize} margin={margin} padding={padding}>{title}</StyledTitle>;
};

Title.propTypes = {
  title: PropTypes.string,
  fontSize: PropTypes.string,
  margin: PropTypes.string,
  padding: PropTypes.string,
};

export default Title;
