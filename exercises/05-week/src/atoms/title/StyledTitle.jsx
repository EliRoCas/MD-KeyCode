import styled from "styled-components";

const StyledTitle = styled.h1`
  align-items: center;
  padding: ${(props) => props.padding || "1rem"};
  margin: ${(props) => props.margin || "1rem"};

  font-size: ${(props) => props.fontSize || "1.6rem"};

  font-weight: 700;
  color: #000000;
`;

export default StyledTitle;
