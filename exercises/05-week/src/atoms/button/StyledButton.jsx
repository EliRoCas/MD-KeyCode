import styled from "styled-components";

const StyledButton = styled.button`
  width: 85%;
  padding: 10px 20px;
  border-radius: 10px;
  border: none;
  cursor: pointer;

  background-color: ${(props) => props.bgButtonColor || "#ffffff"};

  font-size: 16px;
  font-weight: 600;
  color: ${(props) => props.textColor || "#A2A9C0"};
`;

export default StyledButton;
