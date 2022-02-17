import "./App.css";
import "./style.css";

import Titul from "./component/Titul";

import { useState } from "react";
function Acordeo() {
  //titulos
  let titulos = [
    {
      text: "titulo1 ",
      descripcio: "contingut1",
    },
    {
      text: "titulo2",
      descripcio: "contingut2",
    },
    {
      text: "titulo3",
      descripcio: "contingut3",
    },
  ];

  const [title, setTitle] = useState(null);

  const aparecer = (input) => {
    if (input === title) {
      setTitle(null);
    } else {
      console.log("click" + input);
      setTitle(input);
    }
  };

  return (
    <div className="App">
      <br />
      <div className="ocultar-mostrar">
        {titulos.map(
          (
            titul, //valor
            index //posicio del array
          ) => (
            <Titul
              text={titul.text}
              descripcio={titul.descripcio}
              funcioClicar={aparecer}
              clas={index === title ? "desshow" : "deshidden"}
              ntitle={index}
            />
          )
        )}
      </div>
    </div>
  );
}

export default Acordeo;
