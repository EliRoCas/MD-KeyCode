import styled from "styled-components";

const StyledTitle = styled.h1`
  align-items: center;
  padding: 0.625rem 1.25rem;
  margin: 1rem;
  color: #333;
  font-size: ${(props) => props.fontSize || "1.5rem"};
  font-family: "Red Hat Display", sans-serif;
`;

export default StyledTitle;
