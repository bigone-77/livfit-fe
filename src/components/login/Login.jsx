import { useState } from "react";
import axios from "axios";
import {
  LoginContainer,
  LoginBox,
  Logo,
  Form,
  Input,
  LoginButton,
  KeepLoggedIn,
  Checkbox,
  CheckboxLabel,
  Links,
  SnsLogin,
  SnsButtons,
  SnsButton,
} from "./LoginStyles";
import logo from "/src/assets/images/logo.png";

const Login = () => {
  const [loginId, setloginId] = useState("");
  const [password, setPassword] = useState("");
  const [keepLoggedIn, setKeepLoggedIn] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    // 로그인 로직 추가
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_BASE_URL}/api/users/login`,
        {
          loginId,
          password,
        }
      );
      if (response.status === 200) {
        // 로그인 성공
        alert("로그인 성공 : " + response.data);
        console.log("로그인 성공:", response.data);
        // 로그인 성공 후 로직 추가 (예: 토큰 저장, 리다이렉트 등)
      } else if (response.status === 401) {
        // 로그인 실패 비번 일치 X
        alert("id 혹은 비밀번호 가 일치하지 않습니다.");
        console.log("id 혹은 비밀번호 가 일치하지 않습니다.");
      } else {
        // 로그인 실패
        console.log("로그인 실패:", response.data.message);
      }
    } catch (error) {
      console.error("로그인 요청 중 오류 발생:", error);
    }
  };

  return (
    <LoginContainer>
      <LoginBox>
        <Logo src={logo} alt="logo" />
        <Form onSubmit={handleLogin}>
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
            <a href="/find-id">아이디 찾기</a>
            <span> | </span>
            <a href="/find-password">비밀번호 찾기</a>
            <span> | </span>
            <a href="/signup">회원가입</a>
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

export default Login;
