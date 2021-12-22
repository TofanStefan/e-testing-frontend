import React from "react";
import ForgotPasswordSvg from "../SVG/forgot-password.svg";
import {
  InputContainer,
  Button,
} from "../StyledComponents/login-styled-components";
import styled from "styled-components";

const ForgotInfo = () => {
  return (
    <InputContainer>
      <img src={ForgotPasswordSvg} />
      <input type={"text"} placeholder={"Email.. "} />
      <SendEmailButton onClick={() => console.log("clicked")}>
        Send recovery email
      </SendEmailButton>
    </InputContainer>
  );
};
const SendEmailButton = styled(Button)`
  margin: auto;
  width: 75%;
`;

export default ForgotInfo;
