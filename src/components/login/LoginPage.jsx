import { useLogin } from "@hooks/useLogin";
import logo from "@images/login/logo.svg";
import { Link } from 'react-router-dom';
import { useState } from "react";
import {
  LoginContainer, LoginBox, LogoDiv, Form, InputDiv, Input, LoginButton, KeepLoggedIn, Checkbox, CheckboxLabel, Links, SnsLogin, SnsButtons, SnsButton
} from './LoginStyles';

const LoginPage = () => {
  const [loginId, setloginId] = useState("");
  const [password, setPassword] = useState("");
  const [keepLoggedIn, setKeepLoggedIn] = useState(false);

  const { signIn } = useLogin();

  const handleLogin = async (e) => {
    e.preventDefault();
    signIn({ loginId, password });
  };

  return (
    <LoginContainer>
      <LoginBox>
       <LogoDiv>
          <img src={logo} alt="logo" />
        </LogoDiv>
        <Form onSubmit={handleLogin}>
        <InputDiv>
          <Input
            type="text"
            placeholder="아이디"
            value={loginId}
            onChange={(e) => setloginId(e.target.value)}
            />
            <Input
              type="password"
              placeholder="비밀번호"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          <LoginButton type="submit">로그인</LoginButton>
          </InputDiv>

          <KeepLoggedIn>
            <Checkbox
              type="checkbox"
              id="keepLoggedIn"
              checked={keepLoggedIn}
              onChange={(e) => setKeepLoggedIn(e.target.checked)}
            />
            <CheckboxLabel htmlFor="keepLoggedIn" />
            <span>로그인 상태 유지</span>
          </KeepLoggedIn>
          <Links>
            <Link to="/find-password">비밀번호 찾기</Link>
            <span> | </span>
            <Link to="/signup">회원가입</Link>
          </Links>
          <SnsLogin>
            <span>SNS로 로그인하기</span>
            <SnsButtons>
              <SnsButton className="snsButton1" />
              <SnsButton className="snsButton2" />
              <SnsButton className="snsButton3" />
            </SnsButtons>
          </SnsLogin>
        </Form>
      </LoginBox>
    </LoginContainer>
  );
};

export default LoginPage;
