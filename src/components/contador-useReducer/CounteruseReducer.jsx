import { useReducer } from "react";
import { counter, Operacio, reset } from "./counter";
function CounteruseReducer() {
  //dispatch demana que executi la fucnio del useReducer
  const [count, dispatch] = useReducer(counter, 0);
  //state : estat actual, amount: accio a fer
  //stat = estat actual,amount = segon argument,
  return (
    <>
      <h1>Comptador use Reducer</h1>
      <div>{count}</div>
      <button onClick={() => dispatch(Operacio(+1))}>+1</button>
      <button onClick={() => dispatch(Operacio(-1))}>-1</button>
      <button onClick={() => dispatch(Operacio(+5))}>+5</button>
      <button onClick={() => dispatch(reset())}>reset</button>
    </>
  );
}

export default CounteruseReducer;
