import { useReducer } from "react";
function CounteruseReducer() {
  //dispatch demana que executi la fucnio del useReducer
  const [count, dispatch] = useReducer((state, amount) => state + amount, 0);
  //state : estat actual, amount: accio a fer
  //stat = estat actual,amount = segon argument,
  return (
    <>
      <h1>Comptador use Reducer</h1>
      <div>{count}</div>
      <button onClick={() => dispatch(+1)}>+1</button>
      <button onClick={() => dispatch(-1)}>-1</button>
    </>
  );
}

export default CounteruseReducer;
