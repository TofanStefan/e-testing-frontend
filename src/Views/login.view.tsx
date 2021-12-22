import React from "react";
import styled from "styled-components";
import Wave from "../SVG/wave.svg";
import Logo from "../Assets/logo.png";
const Login = () => {
  return (
    <MainContainer>
      <LoginContainer>
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
            <a href={"/forgot"}>
              <p>Forgot password?</p>
            </a>
          </SectionForgot>
          <Button onClick={() => console.log("clicked")} type={"button"}>
            Login
          </Button>
        </InputContainer>
        <LogoImg src={Logo}></LogoImg>
      </LoginContainer>
      <FooterImg src={Wave} alt="wave" />
    </MainContainer>
  );
};
const RememberMe = styled.div`
  display: flex;
`;

const LogoImg = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  width: 200px;
  @media (max-width: 1100px) {
    display: none;
  }
`;
const Button = styled.button`
  width: 100%;
  font-family: "Lexend Deca", sans-serif;
  outline: 0;
  border: 0;
  border-radius: 6px;
  padding: 12px 8px;
  background-color: #20df7f;
  color: #224957;
  margin-top: 20px;
  font-size: 1.2rem;
  :hover {
    cursor: pointer;
    transform: scale(1.01);
  }
`;
const SectionForgot = styled.div`
  display: flex;
  justify-content: space-between;
`;
const InputContainer = styled.div`
  width: 300px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  input[type="text"] {
    color: white;
    font-size: 0.9rem;
    background-color: #224957;
    font-family: "Lexend Deca", sans-serif;
    outline: 0;
    border: 0;
    border-radius: 6px;
    padding: 16px 16px;
    margin-bottom: 20px;
    ::placeholder {
      color: white;
      font-family: "Lexend Deca", sans-serif;
    }
  }
  p {
    font-family: "Roboto Slab", serif;
    font-size: 1.05rem;
    color: #224957;
    line-height: 0;
    margin: 0.6em 0.3em;
  }
  a {
    font-weight: 600;
  }
`;
const ParagraphText = styled.p`
  font-size: 1.2rem;
  font-family: "Montserrat", sans-serif;
  color: #224957;
  font-weight: 500;
`;
const HeaderText = styled.h1`
  font-family: "Lexend Deca", sans-serif;
  font-weight: 500;
  font-size: 3.5rem;
  line-height: 0.8;
  color: #224957;
`;
const MainContainer = styled.div`
  text-align: center;
  @import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Lexend+Deca&display=swap");
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #e5e5e5;
`;

const LoginContainer = styled.div`
  width: 600px;
  height: 400px;
  margin: auto;

  box-shadow: 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(255, 255, 255),
    0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
  padding: 50px 20px;
  border-radius: 20px;
  @media (max-width: 768px) {
    width: 95%;
    padding: 0px 0px;
  }
  @media (max-width: 600px) {
    width: 95%;
    padding: 0px 0px;
    box-shadow: none;
  }
`;

const FooterImg = styled.img`
  position: absolute;
  bottom: 0;
`;
export default Login;
