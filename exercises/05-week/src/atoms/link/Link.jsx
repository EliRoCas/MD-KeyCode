import styled from "styled-components";
import PropTypes from "prop-types";

const StyledLink = styled.a`
  font-size: 1rem;
  font-family: "Red Hat Display", sans-serif;
`;

const Link = ({ text }) => {
  return <StyledLink href="#">{text}</StyledLink>;
};

Link.propTypes = {
  text: PropTypes.string,
};

export default Link;
