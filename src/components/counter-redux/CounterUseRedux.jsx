import { useDispatch, useSelector } from "react-redux";
import { increment, reset } from "./counter";

export default function CounterUseRedux() {
  const count = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <>
      <h1>Comptador use Redux</h1>
      <div>{count}</div>
      <button onClick={() => dispatch(increment(+1))}>+1</button>
      <button onClick={() => dispatch(increment(-1))}>-1</button>
      <button onClick={() => dispatch(reset())}>reset</button>
    </>
  );
}
