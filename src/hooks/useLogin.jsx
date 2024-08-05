import { useState } from "react";
import { publicApi } from "@api/axios";

export const useLogin = () => {
  const [errorMessage, setErrorMessage] = useState("");

  const signIn = async (data) => {
    if (data) {
      try {
        const response = await publicApi.post("/users/login", data);

        if (response.status === 200) {
          const { accessToken, refreshToken } = response.data;

          if (accessToken && refreshToken) {
            localStorage.setItem("accessToken", accessToken);
            localStorage.setItem("refreshToken", refreshToken);
          }
          window.location.href = "/";
        } else if (response.status === 401) {
          setErrorMessage("ID 혹은 비밀번호가 일치하지 않습니다.");
        } else {
          setErrorMessage("로그인 실패");
        }
      } catch (error) {
        setErrorMessage("ID 혹은 비밀번호가 일치하지 않습니다. ");
      }
    }
  };

  return { signIn, errorMessage, setErrorMessage };
};
