import "./App.css";
import "./style.css";

/* import Graella from "./components/graella/Graella";
import Contador from "./components/contador/Contador";
import Acordeo from "./components/acordeo/Acordeo";
import Carrusel from "./components/carrusel/Carrusel";
import Tres_en_ratlla from "./components/tres-en-ratlla/Tres_en_ratlla";
import Rellotge from "./components/rellotge-digital/Rellotge";
*/

import Rellotge_analogic from "./components/rellotge-analogic/Rellotge_analogic";
function App() {
  return (
    <div className="App">
      {/* <div className="graella">
        <Graella />
      </div>
      <br />
      <div>
        <Contador />
      </div> */}
      <br />
      {/* <div className="ocultar-mostrar">
        <Acordeo />
      </div> */}
      {/*  <div className="">
        <Carrusel />
      </div> */}
      {/* <div>
        <Tres_en_ratlla />
      </div>
      <div>
        <Rellotge />
      </div> */}
      <div>
        <Rellotge_analogic />
      </div>
      <br />
      <br />
    </div>
  );
}

export default App;
