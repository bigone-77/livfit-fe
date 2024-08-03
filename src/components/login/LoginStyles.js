import styled from "styled-components";
import uncheckedImg from "/src/assets/images/login/unchecked.svg";
import checkedImg from "/src/assets/images/login/checked.svg";

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  max-width: 500px;
  background-color: #f8f8f8;
  font-size: 12px;
  color: #6a6a6a;
`;

export const LoginBox = styled.div`
  padding: 40px;
  border-radius: 8px;
  align-items: center;
  width: 400px;
`;

export const LogoDiv = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 70px;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Input = styled.input`
  width: 100%;
  height: 50px;
  margin-bottom: 10px;
  padding-left: 25px;
  background-color: #ffffff;
  border: none;
  border-radius: 32px;
  box-shadow: inset 0px 1px 4px 0px rgba(0, 0, 0, 0.15);
  box-sizing: border-box;

  &:focus {
    outline: none;
  }
`;

export const LoginButton = styled.button`
  width: 100%;
  height: 50px;
  margin-bottom: 20px;
  background-color: #fb8500;
  color: white;
  border: none;
  border-radius: 32px;
  cursor: pointer;
  box-sizing: border-box;

  &:focus {
    outline: none;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const KeepLoggedIn = styled.div`
  display: flex;
  align-items: center;
`;

export const Checkbox = styled.input`
  display: none;

  &:checked + label {
    background: url("${checkedImg}") no-repeat;
  }
`;

export const CheckboxLabel = styled.label`
  background: url("${uncheckedImg}") no-repeat;
  width: 15px;
  height: 15px;
  display: inline-block;
  cursor: pointer;
  margin-right: 5px;
`;

export const Links = styled.div`
  display: flex;
  color: #6a6a6a;
  padding-right: 20px;
  a {
    color: #6a6a6a;
    text-decoration: none;

    &:hover {
      color: #ff702a;
    }
  }
`;
export const div_id_pw = styled.div`
display.flex; 
`;
