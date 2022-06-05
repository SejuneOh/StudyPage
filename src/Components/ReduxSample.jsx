import React from "react";
import store from "../Store/store.js";
import { useSelector, useDispatch } from "react-redux";

export default function ReduxSample() {
  const [count, setCount] = React.useState(store.getState().counter);
  const [compId, setcompId] = React.useState("");

  const dispatch = (action) => {
    store.dispatch(action);
    setCount(store.getState().counter);
  };


  const id = useSelector((state) => state.context);
  const dispatchContex = useDispatch();

  const btnClickHandle = () => {
    dispatch({
      type: "LOGIN",
      payload: compId
    })
  };

  return (
    <>
      <h3>Redux에 대해서 알아보자</h3>
      <ul>
        <li>단방향으로 전역상태를 관리하는 lib이다.</li>
        <li>모든 전역 state를 하나의 거대한 object에 담아서 사용한다.</li>
        <h3>Action</h3>
        <ul>
          <li>action은 평번함 js 객체인다.</li>
        </ul>
        <h3>Reducer</h3>
        <ul>
          <li>
            순수함수: 동일한 인자가 들어갈 경우 항상 같은 값이 나오는 함수
          </li>
          <li>최초의 reducer를 initalnize를 할대 최최값을 지정한다.</li>
          <li>
            현재 state와 들어온 action을 이용하여 다음 state를 결정하는 순수함수
          </li>
          <li>
            현재의 state를 받아, action 객체를 가지고 store를 업데이틀 해준다.
          </li>
        </ul>
        <h3>Store</h3>
        <ul>
          <li>
            처음 생성될 때는 init action를 reducer에게 전달하여 초기 state를
            저장한다.
          </li>
        </ul>
      </ul>
      <p
        style={{
          border: "1px solid black",
        }}
      ></p>
      <div>
        <h2>실습1</h2>
        <div>
          <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>{" "}
          <div>{count}</div>{" "}
          <button onClick={() => dispatch({ type: "DECREMENT" })}>- </button>
        </div>
      </div>
      <p
        style={{
          border: "1px solid black",
        }}
      ></p>
      <h2>실습2</h2>
      <input type="text" placeholder="회원가입"
        onChange={e => setcompId(e.target.value)}></input>
      <button onChange={btnClickHandle}>회원가입</button>
      <br />
      <span>{id}님 안녕하세요</span>
    </>
  );
}
