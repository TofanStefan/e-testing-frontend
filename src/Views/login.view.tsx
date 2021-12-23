import React from "react";
import styled from "styled-components";
import Wave from "../SVG/wave.svg";
import Logo from "../Assets/logo.png";
//components
import Login from "../Components/login.component";
import ForgotInfo from "../Components/forgot-info.component";
import { Redirect, Switch, Route, BrowserRouter } from "react-router-dom";
const LoginPage = () => {
  return (
    <MainContainer>
      <LoginContainer>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/login/forgot-password" component={ForgotInfo} />
        </Switch>
      </LoginContainer>
      <FooterImg src={Wave} alt="wave" />
      <LogoImg src={Logo}></LogoImg>
    </MainContainer>
  );
};

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
const FooterImg = styled.img`
  position: absolute;
  bottom: 0;
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
    box-shadow: none;
  }
`;
export default LoginPage;
