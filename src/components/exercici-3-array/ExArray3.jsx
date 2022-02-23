import { useState, useRef } from "react";

function ExArray3() {
  let array = [1, 20, 20, 9, 9, 3, 3, 10, 21, 4];

  const [numeros, setNumeros] = useState(array);
  //manera rapida para eliminar duplicados
  /* let unics = [...new Set(array)]; */
  const unics = [];
  const eliminar = (arr) => {
    /*  setNumeros(unics); */

    //recorem el array i afegim cada element a un nou array
    //i quan aquest element no existeixi ja, utilitzem el metode includes
    for (let i = 0; i < arr.length; i++) {
      //creem una variable i la igualem al nou array amb la seva posicio
      const element = arr[i];
      //el metode includes retorna true si
      //un element esta dintre de un array o false si no u esta
      //quan l'element es duplicat, l'afegim al nou array a la nova posicio
      //agrega al nou array els nous elements que encara no estan dintre
      //si ja estan no els afegeix
      if (!unics.includes(arr[i])) {
        unics.push(element);
      }
    }
    setNumeros(unics);
  };
  return (
    <div className="App">
      <div>
        <h2>Array:</h2>
        <p>Eliminar els numeros duplicats</p>
        {array.map((value, index) => (
          <p>{value}</p>
        ))}
      </div>
      <button className="btn btn-primary m-1" onClick={() => eliminar(array)}>
        eliminar numeros repetits
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

export default ExArray3;
