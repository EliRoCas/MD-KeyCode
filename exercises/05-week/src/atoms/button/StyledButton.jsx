import styled from "styled-components";

const StyledButton = styled.button`
  padding: 10px 20px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-family: "Red Hat Display", sans-serif;
  background-color: ${(props) => props.bgColor || "#ffffff"};
`;

export default StyledButton;
