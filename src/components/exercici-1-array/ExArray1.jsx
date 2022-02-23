import { useState, useEffect } from "react";

function ExArray1() {
  let array = [1, 20, 7, 9, 3, 22, 10, 21, 4];

  const [vector, setVector] = useState(array);
  const [nMitja, setMitja] = useState();
  /* const [nGran, setGran] = useState();
  const [nPetit, setPetit] = useState();
 
 */
  let minim = Math.min(...array);

  let maxim = Math.max(...array);

  let sumar = 0;

  let sum = array.reduce((valor, index) => valor + index);
  let avg = (sum / array.length).toFixed(2);

  const average = () => {
    for (let i = 0; i < array.length; i++) {
      sumar += array[i];
    }
    setMitja((sumar / array.length).toFixed(2));
  };
  /* const calculMin = (x) => {
    for (x = 1; x < array.length; x++) {
      if (array[x] < min) {
        console.log("numero min:" + array[x]);
        min = array[x];
      }
      /* setGran(min); 
    }
    console.log("valor minim:" + min);
  }; */
  /* const calculMax = (i) =>{
  for(i=0;i<array.length;i++){
      if(min<array[i++]){
        (min=array[i++])
      }else if (min>array[i++]){
          (array[i++]=min)
      }else{
          console.log(min);
      }
  }
} */

  /* const calculMitja = (i)=>{

} */
  return (
    <div className="App">
      <div>
        <h2>Array:</h2>
        {vector.map((value, index) => (
          <p>{value}</p>
        ))}
      </div>
      <p className="btn btn-primary m-1">numero mes petit</p>
      <br />
      <p>{minim}</p>

      <p className="btn btn-primary">numero mes gran</p>
      <br />
      {maxim}
      <br />
      <p className="btn btn-primary m-1" onClick={average}>
        mitja de numeros
      </p>
      <br />
      {avg}
      <p className="major"></p>
      <p className="menor"></p>
      <p className="media"></p>
    </div>
  );
}

export default ExArray1;
