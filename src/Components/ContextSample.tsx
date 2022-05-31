import React, { FC } from "react";

export default function ContextSample() {
  const [name, setName] = React.useState();
  const NameContext = React.createContext(name);

  const Hello1 = () => {
    console.log("hello1 render");

    const name = React.useContext(NameContext);

    return (
      <div>
        this is hello1, and name is {name}
        <Hello4 />
      </div>
    );
  };

  const Hello4 = () => {
    console.log("hello4 render");
    const name = React.useContext(NameContext);

    return <div>this is hello4, and name is {name}</div>;
  };

  const handleClick = (e) => {
    setName(e.target.value);
  };

  return (
    <>
      <input type="text" onChange={handleClick} />
      <NameContext.Provider value={name}>
        <Hello1 />
      </NameContext.Provider>
      <ul>
        <li>
          props drilling인 경우는, useContext()보다, 컴포넌트의 합성이 더 좋은
          경우가 있다.
        </li>
        <li>useContext를 사용해서 props를 받은 컴폰넌트들은 리랜더링 된다.</li>
        <li>
          useContext를 사용하는 사용하는 자식의 리랜더링을 방지하기 위해서
          useMemo를 사용하기도 한다.
        </li>
      </ul>

      <p>
        <br></br>x
      </p>
    </>
  );
}
