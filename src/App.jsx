import "./App.css";
import "./style.css";
import Imagen from "./components/Imagen";
import Botons from "./components/Botons";
import Display from "./components/Display";
import { useState } from "react";
function App() {
  let imatges = [
    "https://www.bbva.com/wp-content/uploads/2021/03/animales-peligro-extincion-sostenibilidad-bbva.jpg",

    "http://www.masquesaludanimal.es//posts/asset_upload_file39075_613728.jpg",

    "https://www.hogarmania.com/archivos/202109/animales-felices-portada-1280x720x80xX.jpg",

    "https://www.fundacion-affinity.org/sites/default/files/dia-de-los-animales.jpg",
  ];

  const [posicio, setPosicio] = useState(null);

  const fullscreen = (input) => {
    if (input === posicio) {
      setPosicio(null);
    } else {
      console.log("click" + input);
      setPosicio(input);
    }
  };

  const [display, setDisplay] = useState(0);
  const [operacio, setOperacio] = useState(null);
  let bol = false;

  const operar = (input) => {
    setOperacio(input);
    console.log(operacio);
    /* setDisplay(display + parseInt(input)); */
    if (operacio === "+1") {
      console.log("a sumat");
      /* setDisplay(display + parseInt(input)); */
      setDisplay((m) => (m === 10 ? m : m + 1));
    } else if (operacio === "+5") {
      /*  setDisplay(display + parseInt(input)); */
      setDisplay((m) => (m === 10 ? m : m + 5));
    }
  };

  const restar = () => {
    setDisplay((m) => (m === 0 ? m : m - 1));
  };

  return (
    <div className="App">
      <div className="graella">
        {imatges.map(
          (
            imatge,
            index //imatge es el valor i index la posicio del array
          ) => (
            <Imagen
              src={imatge}
              funcioClicar={fullscreen}
              clas={
                index === posicio
                  ? "fullscreen" //si la posicion es la misma que la imagen, aplicamos la classe fullscreen
                  : ""
              }
              nimg={index}
            />
          )
        )}
      </div>
      <br />
      <div>
        <Display text={display} />
      </div>
      <div>
        <Botons value={"+1"} funcioClicar={operar} />
        <Botons value={"-1"} funcioClicar={restar} />
        <Botons value={"+5"} funcioClicar={operar} />
      </div>
    </div>
  );
}

export default App;
