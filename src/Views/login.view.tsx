import React from "react";
import styled from "styled-components";
import Wave from "../SVG/wave.svg";
const Login = () => {
  return (
    <MainContainer>
      <LoginContainer>I am on the login page</LoginContainer>
      <FooterImg src={Wave} alt="wave" />
    </MainContainer>
  );
};

const MainContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #e5e5e5;
`;

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 600px;
  height: 400px;
  margin: auto;
  border: 2px solid red;
  @media (max-width: 768px) {
    width: 95%;
  }
`;

const FooterImg = styled.img`
  position: absolute;
  bottom: 0;
`;
export default Login;
