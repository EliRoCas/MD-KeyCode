import styled from "styled-components";

const StyledDescription = styled.p`
  padding: ${(props) => props.padding || "0"};
  margin: ${(props) => props.margin || "0"};

  text-align: center;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5;
`;

export default StyledDescription;
