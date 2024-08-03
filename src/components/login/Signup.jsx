import { useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

import styled from "styled-components";
import { Input } from "./LoginStyles";
import BackButton from "./BackButton";

const SignupContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 95vh;
  background-color: #f6f8f8;
  color: #6a6a6a;
  font-size: 12px;
`;

const Header = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  padding: 10px;
`;

const Content = styled.div`
  padding: 40px;
  border-radius: 8px;
  align-items: center;
`;

const Title = styled.h1`
  margin-left: 10px;
  font-size: 20px;
  font-weight: bold;
  color: #6a6a6a;
`;

const SubmitButton = styled.button`
  width: 100%;
  height: 50px;
  margin-bottom: 10px;
  background-color: #fb8500;
  color: white;
  border: none;
  border-radius: 32px;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

const Signup = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      const serverUrl = import.meta.env.VITE_SERVER_BASE_URL;

      const response = await axios.post(`${serverUrl}/api/users/register`, {
        loginId: id,
        password: password,
      });

      if (response.status === 200) {
        // Handle successful signup
        alert(`회원가입이 완료되었습니다. 아이디: ${id}`);
        navigate("/");
      }
    } catch (error) {
      // Handle error
      console.error("Signup error:", error);
      alert("회원가입에 실패했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <SignupContainer>
      <Header>
        <BackButton />
      </Header>
      <Content>
        <Title>회원가입</Title>
        <br />
        <Input
          type="text"
          placeholder="아이디를 입력해주세요"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <Input
          type="password"
          placeholder="비밀번호를 입력해주세요"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <SubmitButton onClick={handleSignup}>완료</SubmitButton>
      </Content>
    </SignupContainer>
  );
};

export default Signup;
