import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function LoginSample() {
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
      <div>
        ID:
        <input type="text"></input>
        PASSWORD:
        <input type="Password"></input>
        <Link to="/Register">
          <button>로그인</button>
        </Link>
        <Link to="/Signup">
          <a href="#">회원가입</a>
        </Link>
      </div>
    </>
  );
}
