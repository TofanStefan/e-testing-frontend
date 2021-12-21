import React from "react";
import styled from "styled-components";
const Login = () => {
  return (
    <MainContainer>
      <LoginContainer>I am on the login page </LoginContainer>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 600px;
  margin: auto;
  border: 2px solid red;
  @media (max-width: 768px) {
    width: 95%;
  }
`;
