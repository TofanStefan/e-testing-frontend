import React from "react";
// styled components
import {
  HeaderText,
  ParagraphText,
  InputContainer,
  SectionForgot,
  Button,
  RememberMe,
} from "../StyledComponents/login-styled-components";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <HeaderText>Sign in</HeaderText>
      <ParagraphText>
        Sign in and start testing simple with e-testing!
      </ParagraphText>
      <InputContainer>
        <input type={"text"} placeholder={"Login"} />
        <input type={"text"} placeholder={"Password"} />
        <SectionForgot>
          <RememberMe>
            <input id="checkbox" type={"checkbox"} />
            <p>Remember me</p>
          </RememberMe>
          <Link to={"login/forgot-password"}>
            <p>Forgot password?</p>
          </Link>
        </SectionForgot>
        <Button onClick={() => console.log("clicked")} type={"button"}>
          Login
        </Button>
      </InputContainer>
    </>
  );
};

export default Login;
