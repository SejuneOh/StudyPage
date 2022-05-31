import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// styled
const Wrapper = styled.div`
  border: 3px solid blue;
`;

const LoginContainer = styled.div`
  width: 340px;
  margin: auto;
`;

const H3Login = styled.h3`
  text-align: center;
  font-weight: 800;
  font-size: 20px;
  line-height: 20px;
`;

const Input = styled.input`
  width: 300px;
  height: 54px;
  padding: 0 19px;
  border: 1px solid #ccc;
  border-radius: 3px;
  outline: none;
  font-size: 14px;
  line-height: 20px;
  margin: 10px 0;
`;

export default function LoginSample() {
  const [id, setId] = React.useState("");
  const [pw, setPw] = React.useState("");
  const [isLogin, setIsLogin] = React.useState(false);
  const idRef = React.useRef(null);
  const pwRef = React.useRef(null);

  const inputChange = (e) => {
    if (e.target.id === "id") {
      setId(e.target.value);
    } else {
      setPw(e.target.value);
    }

    setIsLogin(id.length >= 6 && pw.length >= 12 ? true : false);
  };

  const btnClickHandle = () => {
    if (isLogin) return;

    if (id.length < 6 && pw.length < 12) {
      alert("id 6글자 이상, pw 12글자 입력해주세요");
      idRef.current.value = "";
      pwRef.current.value = "";
      idRef.current.focus();
    } else if (id.length < 6) {
      alert("id 6글자 이상 입력해주세요");
      idRef.current.value = "";
      idRef.current.focus();
    } else {
      alert("pw 12글자 입력해주세요");
      pwRef.current.value = "";
      pwRef.current.focus();
    }
  };

  return (
    <>
      <ul>
        <li>
          useEffect, useState, Context, styled 사용하여 로그인 페이지 만들기
        </li>
        <li>아이디 6글자, 비밀번호 12이상</li>
        <li>
          회원가입 성공 및 로그인하면 로그아웃 할 때 까지 로그인 페이지 및,
          회원가입 페이지 접근제한
        </li>
      </ul>
      <Wrapper>
        <LoginContainer>
          <H3Login>로그인</H3Login>
          <Input
            id="id"
            placeholder="아이디를 입력해주세요"
            onChange={inputChange}
            ref={idRef}
          ></Input>
          <Input
            id="pw"
            placeholder="password를 입력해주세요"
            type="password"
            onChange={inputChange}
            ref={pwRef}
          ></Input>

          <Link
            to={isLogin ? `/Register/${id}` : "#"}
            // to="/Register"
            style={{
              width: "100%",
            }}
          >
            <button
              style={{
                width: "100%",
                height: "54px",
                display: "block",
                backgroundColor: "#5f0080",
                color: "#fff",
                borderRadius: "3px",
              }}
              onClick={btnClickHandle}
            >
              로그인
            </button>
          </Link>
          <Link
            to="#"
            style={{
              textDecoration: "none",
            }}
          >
            <button
              style={{
                width: "100%",
                height: "54px",
                display: "block",
                backgroundColor: "#fff",
                color: "#5f0080",
                margin: "20px 0",
                borderRadius: "3px",
              }}
            >
              회원가입
            </button>
          </Link>
        </LoginContainer>
      </Wrapper>
    </>
  );
}
