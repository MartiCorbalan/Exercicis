import { useState, useRef } from "react";

function ExArray6() {
  let array = [1, 20, 7, 9, 3, 22, 10, 21, 4];

  const [copia, setCopia] = useState(array);
  const valorNum = useRef();
  const posicio = useRef();

  const afegir = (x) => {
    //a la posicio del valor es igual i posa el valor afegit
    copia[posicio.current.value] = valorNum.current.value;
    setCopia([...copia]);

    //afegir numero al final
    /* setCopia([...copia, ` ${valorNum.current.value}`]); */
  };

  return (
    <div className="App">
      <div>
        <h2>Array:</h2>
        {array.map((value, index) => (
          <p>{value}</p>
        ))}
        <p>
          <input type="number" ref={valorNum} />
          <input type="number" ref={posicio} />
        </p>
      </div>
      <button className="btn btn-primary m-1" onClick={afegir}>
        afegir numero
      </button>
      <br />
      <div>
        {copia.map((valor, index) => (
          <p>{valor}</p>
        ))}
      </div>

      <br />
    </div>
  );
}

export default ExArray6;
