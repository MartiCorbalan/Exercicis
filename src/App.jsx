import "./App.css";
import "./style.css";

import Graella from "./components/graella/Graella";
import Contador from "./components/contador/Contador";
import Acordeo from "./components/acordeo/Acordeo";
import Carrusel from "./components/carrusel/Carrusel";
function App() {
  return (
    <div className="App">
      <div className="graella">
        <Graella />
      </div>
      <br />
      <div>
        <Contador />
      </div>
      <br />
      <div className="ocultar-mostrar">
        <Acordeo />
      </div>
      <div className="">
        <Carrusel />
      </div>
    </div>
  );
}

export default App;
