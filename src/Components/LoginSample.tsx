import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function LoginSample() {
  const Wrapper = styled.div`
    // height: 100vh;
    border: 3px solid blue;
  `;

  const LoginContainer = styled.div`
    width: 340px;
    margin: auto;
    // border: 2px solid red;
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
          <Input placeholder="아이디를 입력해주세요"></Input>
          <Input placeholder="password를 입력해주세요" type="password"></Input>

          <Link
            to="/Register"
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
            >
              로그인
            </button>
          </Link>
          <Link to="/Signup">
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
