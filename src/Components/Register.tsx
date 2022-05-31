import React from "react";
import { useParams } from "react-router-dom";

export default function Register() {
  const params = useParams();

  console.dir(params);
  return <div>{params.id}님 안녕하세요</div>;
}
