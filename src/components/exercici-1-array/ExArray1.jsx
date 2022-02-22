import { useState, useEffect } from "react";



function ExArray1() {
  
  let array=[1,2,7,9,3,22,10,21,4]

const [vector, setVector] = useState(array)
const [nGran, setGran] = useState();
const [nPetit, setPetit] = useState();
const [nMitja, setMitja] = useState();
let PosicioMajor = 0;
let PosicioMenor = 0;

const calculMax = (x) =>{
  for (x = 1; x < array.length; x++) {
    if (array[x] > PosicioMajor) {
      nGran = array[x];
    } 
    setGran(array[x])
  }
 
}
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
          
          <p>{value}
          </p>

        ))} 
        
      </div>
      <p className="btn btn-primary m-1" onClick={calculMax}>
        numero mes gran
      </p>
      <br />
      <p>{nGran}</p>
        <br />
      <p className="btn btn-primary">numero mes petit</p>
      <br />
      {nPetit}
      <br />
      <p className="btn btn-primary m-1">mitja de numeros</p>
      <br />
      {nMitja}
      <p className="major" ></p>
      <p className="menor"></p>
      <p className="media"></p>
    </div>
  );
}

export default ExArray1;
