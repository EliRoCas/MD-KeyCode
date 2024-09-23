import PropTypes from "prop-types";
import StyledTitle from "./StyledTitle";

const Title = ({ title, fontSize }) => {
  return <StyledTitle fontSize={fontSize}>{title}</StyledTitle>;
};

Title.propTypes = {
  title: PropTypes.string,
  fontSize: PropTypes.string,
};

export default Title;
