import styled from "styled-components";

const RememberMe = styled.div`
  display: flex;
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
    opacity: 0.9;
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

export {
  HeaderText,
  ParagraphText,
  InputContainer,
  SectionForgot,
  Button,
  RememberMe,
};
