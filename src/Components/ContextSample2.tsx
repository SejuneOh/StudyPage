import React from "react";
import { createContext, useContext } from "react";

const defaultUser = {
  name: "oh",
  id: "David",
};

export default function ContextSample2() {
  const UserContext = createContext(defaultUser);
  const NameContext = createContext(defaultUser.name);
  const IdContext = createContext(defaultUser.id);

  const [id, setId] = React.useState(defaultUser.id);
  const [name, setName] = React.useState(defaultUser.name);

  const HelloName = () => {
    console.log("Name context Rerendering");
    const name = useContext(NameContext);
    return <div>this is HelloName. and Name is {name}</div>;
  };

  const HelloId = () => {
    console.log("ID context Rerendering");

    const id = useContext(IdContext);

    return (
      <>
        <div>this is HelloId. and Id is {id}</div>
      </>
    );
  };

  const nameHandleChange = (e: any) => {
    setName(e.target.value);
  };
  const idChangeHandle = (e: any) => {
    setId(e.target.value);
  };

  return (
    <>
      <ul>
        <li>
          Provider의 ref 객체를 넘겨 주었기 때문에, property의 값이 달라져도
          ref가 달려졌기 때문에, 모두 다시 재렌더링 된다.
        </li>
        <li>
          refercence type의 객체를 rerender를 막기 위해서, context를 나눠서
          사용한다.
        </li>
      </ul>
      <UserContext.Provider value={defaultUser}>
        <NameContext.Provider value={defaultUser.name}>
          <input type="text" onChange={nameHandleChange}></input>
          <HelloName />
        </NameContext.Provider>
        <IdContext.Provider value={defaultUser.id}>
          <input type="text" onChange={idChangeHandle}></input>
          <HelloId />
        </IdContext.Provider>
      </UserContext.Provider>
      {/* <UserContext.Provider value={defaultUser}>
      </UserContext.Provider> */}
    </>
  );
}
