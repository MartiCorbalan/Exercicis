import { useState } from "react";
/* import Botons from "./component/Botons"; */
function Tres_en_ratlla() {
  const [array, setArray] = useState([
    "_",
    "_",
    "_",
    "_",
    "_",
    "_",
    "_",
    "_",
    "_",
  ]);

  let bool = false;
  let contador = 0;
  const click = (index) => {
    let copia = [...array];
    if (contador % 2 === index) {
      console.log("ha posat x");
      copia[index] = "X";
      setArray(copia);
    } else {
      console.log("ha posat 0");
      copia[index] = "O";
      setArray(copia);
    }
  };

  return (
    <div className="App">
      <br />
      <div className="caja">
        <br />

        {array.map(
          (
            titul, //valor
            index //posicio del array
          ) => (
            <button className="clicat" onClick={() => click(index)}>
              {array[index]}
            </button>
          )
        )}
      </div>
    </div>
  );
}

export default Tres_en_ratlla;
