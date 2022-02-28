import { useDispatch, useSelector } from "react-redux";
import { increment, reset, getCount } from "./counter";

export default function CounterUseReduxPatrons() {
  //li passem al selector una funcio getCount
  const count = useSelector(getCount);
  const dispatch = useDispatch();
  return (
    <>
      <h1>Comptador use Redux amb patrons</h1>
      <div>{count}</div>
      <button onClick={() => dispatch(increment(+1))}>+1</button>
      <button onClick={() => dispatch(increment(-1))}>-1</button>
      <button onClick={() => dispatch(reset())}>reset</button>
    </>
  );
}
