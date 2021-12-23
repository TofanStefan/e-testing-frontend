import React, { useState, useEffect } from "react";
// styled components
import {
  HeaderText,
  ParagraphText,
  InputContainer,
  SectionForgot,
  Button,
  RememberMe,
  LoaderContainer,
} from "../StyledComponents/login-styled-components";
import { Link } from "react-router-dom";
import Loader from "react-loader-spinner";

const Login = () => {
  const [shouldSpin, setShouldSpin] = useState(false);
  useEffect(() => {}, [shouldSpin]);

  const spin = () => {
    setShouldSpin(!shouldSpin);
  };
  return (
    <>
      {shouldSpin ? (
        <LoaderContainer>
          <Loader
            type="ThreeDots"
            color="#20df7f"
            height={100}
            width={100}
            timeout={3000} //3 secs
          />
        </LoaderContainer>
      ) : (
        <>
          <HeaderText>Sign in</HeaderText>
          <ParagraphText>
            Sign in and start testing simple with e-testing!
          </ParagraphText>
        </>
      )}
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
        <Button onClick={spin} type={"button"}>
          Login
        </Button>
      </InputContainer>
    </>
  );
};

export default Login;
