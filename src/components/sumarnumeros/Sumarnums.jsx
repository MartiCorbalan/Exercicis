import { useEffect, useState } from "react";

function Sumarnums() {
    const [numero, setNumero] = useState(0)
    const [total, setTotal] = useState(null);
  
    const sumar = () =>{
      
        if(total === null){
            setTotal(numero)
        }else{
            setTotal(parseInt(total + numero))
        }
        console.log(total)
        setNumero(0)
    }
  const reset = () =>{
    setTotal(null)
    setNumero(0)
        
    }
  return (
    <div className="App">
      <br />
      <h2>Sumador de numeros</h2>
      <div className="">
        <p>Valor: </p>
        <input type="number" onChange={(event)=>{setNumero(event.target.value)}}/>
      </div>
      <div>
        <p>Total: </p>
        <input type="number" value={total}/>
      </div>

      <button onClick={sumar}>
        Sumar
      </button>

      <button onClick={reset}>
        Reset
      </button>
    </div>
  );
}

export default Sumarnums;
