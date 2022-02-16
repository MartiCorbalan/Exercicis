import { useEffect, useState } from "react";

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

  

  const [contador, setContador] = useState(0)

  const [acabar, setAcabar] = useState(false)
  //comprueva si acabar se ha modificado
  //se llama cada vez que comprueba si acabar es true
  useEffect(()=>{
    if(acabar){
      alert("has guanyat")
    }
  },[acabar])

  //cada vez que array modifica llama a funcion ganador
  useEffect(()=>{
    ganador()
  },[array])


  const click = (index) => {
    let copia = [...array];
    if (acabar ) { //comprova si a guanyat es true
      return alert("el joc s'ha acabat, no segueixis provant");
    }
    if(contador % 2 === 0) {
      console.log("ha posat x");
      if(copia[index] === "_"){
              copia[index] = "X";
      }
      setArray(copia);
    } else {
      console.log("ha posat 0");
      if(copia[index] === "_"){
        copia[index] = "0";
      }
      setArray(copia);
    }
    setContador(contador+1);

  };

  const ganador = () =>{
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    
    for(let i = 0 ; i < lines.length; i++){
      const[a, b, c] = lines[i];
      if(array[a] !== "_" && array[b] !== "_" && array[c] !== "_"){
        if(array[a] && array[a] === array[b] && array[a] === array[c]){
        setAcabar(true) 
      }
      }
      
    }
  }

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
