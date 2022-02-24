import { useReducer } from "react";
import { counter, increment, reset } from "./counter";

export default function CounterUseReducer() {
  const [count, dispatch] = useReducer(counter, 0);
  return (
    <>
      <h1>Comptador use Reducer amb patrons</h1>
      <div>{count}</div>
      <button onClick={() => dispatch(increment(+1))}>+1</button>
      <button onClick={() => dispatch(increment(-1))}>-1</button>
      <button onClick={() => dispatch(reset())}>reset</button>
    </>
  );
}
