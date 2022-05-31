import React, { useEffect } from "react";

export default function HookSample() {
  const [value, setValue] = React.useState("");
  const [time, setTime] = React.useState(3);
  const [intervalFlag, setInervalFlag] = React.useState(false);

  const inputChange = (e: any) => {
    console.log(typeof e);

    setValue(e.target.value);
    setTime(3);
    setInervalFlag(true);
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);

    const timer = setTimeout(() => {
      if (intervalFlag) {
        console.log("value:", value);
      }
    }, 3000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [value]);

  return (
    <>
      <input type="number" onChange={inputChange} />
      <br />
      <span>{time <= 0 ? `log 반영완료` : `${time}초 후 로그 찍힘`} </span>
    </>
  );
}
