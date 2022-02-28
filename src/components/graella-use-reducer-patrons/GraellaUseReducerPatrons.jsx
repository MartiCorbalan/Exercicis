import React, { Component } from "react";
import { useReducer } from "react";
import { fullscreen, Incrementar } from "./graella";

function GraellaUseReducerPatrons() {
  let imatges = [
    "https://www.bbva.com/wp-content/uploads/2021/03/animales-peligro-extincion-sostenibilidad-bbva.jpg",

    "http://www.masquesaludanimal.es//posts/asset_upload_file39075_613728.jpg",

    "https://www.hogarmania.com/archivos/202109/animales-felices-portada-1280x720x80xX.jpg",

    "https://www.fundacion-affinity.org/sites/default/files/dia-de-los-animales.jpg",
  ];

  const [posicio, dispatch] = useReducer((state, input) => {
    if (input === state) {
      return null;
    } else {
      console.log("click" + input);
      return input;
    }
  }, null);

  const fullscreen = (input) => {
    dispatch(input);
  };

  return (
    <div className="App">
      {" "}
      <br />
      <div className="graella">
        <h2>Graella de fotos use Reducer amb patrons</h2>
        <div className="imatges">
          {imatges.map(
            (
              imatge,
              index //imatge es el valor i index la posicio del array
            ) => (
              <img
                key={index}
                alt={index}
                src={imatge}
                onClick={() => fullscreen(index)}
                className={index === posicio ? "fullscreen Avatar" : "Avatar"}
              ></img>
            )
          )}
        </div>
      </div>
      <br />
    </div>
  );
}

export default GraellaUseReducerPatrons;
