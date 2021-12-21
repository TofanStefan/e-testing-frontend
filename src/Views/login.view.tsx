import React from "react";
import styled from "styled-components";
import Wave from "../SVG/wave.svg";
const Login = () => {
  return (
    <MainContainer>
      <LoginContainer>
        <HeaderText>Sign in</HeaderText>
        <ParagraphText>Sign in and start testing simple!</ParagraphText>
        <InputContainer>
          <UserInput placeholder={"Login"}></UserInput>
          <UserInput placeholder={"Password"}></UserInput>
          <div>
            <UserCheckBox type={"checkbox"} />
            Remember me
          </div>
        </InputContainer>
      </LoginContainer>
      <FooterImg src={Wave} alt="wave" />
    </MainContainer>
  );
};
const UserInput = styled.input`
  color: white;
  background-color: #224957;
  font-family: "Lexend Deca", sans-serif;
  outline: 0;
  border: 0;
  border-radius: 6px;
  padding: 8px 8px;
  margin-bottom: 20px;
`;

const UserCheckBox = styled.input`
  background-color: #224957;
`;
const InputContainer = styled.div`
  border: 2px red solid;
  width: 200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;
const ParagraphText = styled.p`
  font-size: 0.9rem;
  font-family: "Lexend Deca", sans-serif;
  color: #224957;
  font-weight: 500;
`;
const HeaderText = styled.h1`
  font-family: "Lexend Deca", sans-serif;
  font-weight: 500;
  font-size: 3rem;

  color: #224957;
`;
const MainContainer = styled.div`
  text-align: center;
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
  @media (max-width: 768px) {
    width: 95%;
  }
`;

const FooterImg = styled.img`
  position: absolute;
  bottom: 0;
`;
export default Login;
