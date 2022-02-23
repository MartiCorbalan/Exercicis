import { useState, useRef } from "react";

function ExArray4() {
  let array = [1, 20, 20, 9, 9, 3, 3, 10, 21, 4];

  const [numeros, setNumeros] = useState(array);
  //manera rapida para eliminar duplicados
  /* let unics = [...new Set(array)]; */

  let duplicats = [];
  const eliminar = (arr) => {
    //recorem el array i afegim cada element a un nou array
    for (let i = 0; i < arr.length; i++) {
      let contador = 0;
      for (let m = 0; m < arr.length; m++) {
        if (arr[i] === arr[m]) {
          contador++;
        }
      }
      if (contador >= 2) {
        duplicats.push(arr[i]);
      }
    }

    setNumeros(duplicats);
  };
  return (
    <div className="App">
      <div>
        <h2>Array:</h2>
        <p>Eliminar els numeros unics</p>
        {array.map((value, index) => (
          <p>{value}</p>
        ))}
      </div>
      <button className="btn btn-primary m-1" onClick={() => eliminar(array)}>
        eliminar numeros unics
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

export default ExArray4;
