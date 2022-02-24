import { useState } from "react";

function CounteruseState() {
  const counter = (state) => state + 1;
  const [count, setCount] = useState(0);
  const counter2 = (state) => state - 1;
  return (
    <>
      <h1>Comptador use State</h1>
      <div>{count}</div>
      <button onClick={() => setCount(counter)}>+1</button>
      <button onClick={() => setCount(counter2)}>-1</button>
    </>
  );
}

export default CounteruseState;
