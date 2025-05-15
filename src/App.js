import React, { useState, useCallback } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Parent />
    </div>
  );
}

const Parent = () => {
  const [count, setCount] = useState(0);

  // Without useCallback, this function is recreated on every render
  const handleClick = useCallback(() => {
    console.log("Clicked!  " + count);
  }, []);

  return (
    <>
      <button
        onClick={() => {
          setCount(count + 1);
          console.log(count);
        }}
      >
        Increment
      </button>
      <Child onClick={handleClick} />
    </>
  );
};

const Child = React.memo(({ onClick }) => {
  console.log("Child rendered  ");
  return <button onClick={onClick}>Click Me</button>;
});
