import { useState, useRef } from "react";

function ExArray5() {
  let array = [1, 2, "A", "B", "hellow"];
  let array2 = [3, 4, "C"];
  const [numeros, setNumeros] = useState(array);

  let combi = [];
  //forma rapida para concatenar
  /* let array3 = array.concat(array2); */
  const concatenar = () => {
    for (let i = 0; i < array.length; i++) {
      for (let m = 0; m < array2.length; m++) {
        combi.sort();
        combi.push(array[i] + array2[m]);
      }
    }
    setNumeros(combi);
  };
  return (
    <div className="App">
      <div>
        <h2>Array:</h2>
        <p>concatenar arrays</p>
        <h2>array 1</h2>
        {array.map((value, index) => (
          <p>{value}</p>
        ))}
        <h2>array 2</h2>
        {array2.map((value, index) => (
          <p>{value}</p>
        ))}
      </div>
      <button className="btn btn-primary m-1" onClick={concatenar}>
        concatenar
      </button>
      <br />
      <div>
        {numeros.map((valor, index) => (
          <p>{valor}</p>
        ))}
      </div>

      <br />
    </div>
  );
}

export default ExArray5;
