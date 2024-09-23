import PropTypes from "prop-types";
import StyledDescription from "./StyledDescription";

const Description = ({ text, margin, padding }) => {
  return (
    <StyledDescription margin={margin} padding={padding}>
      {text}
    </StyledDescription>
  );
};

Description.propTypes = {
  text: PropTypes.string,
  margin: PropTypes.string,
  padding: PropTypes.string,
};

export default Description;
