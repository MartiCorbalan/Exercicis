import React, { Component } from "react";

import "./App.css";

import Imagen from "./component/Imagen";

import { useState } from "react";

function Graella() {
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

  return (
    <div className="App">
      {" "}
      <br />
      <div className="graella">
        <div className="imatges">
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
      </div>
    </div>
  );
}

export default Graella;
