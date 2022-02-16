import Imatge from "./component/Imatge";
import Botons from "./component/Botons";

import { useState } from "react";

function Carrusel() {
  const imatges = [
    "https://www.bbva.com/wp-content/uploads/2021/03/animales-peligro-extincion-sostenibilidad-bbva.jpg",

    "http://www.masquesaludanimal.es//posts/asset_upload_file39075_613728.jpg",

    "https://www.hogarmania.com/archivos/202109/animales-felices-portada-1280x720x80xX.jpg",

    "https://www.fundacion-affinity.org/sites/default/files/dia-de-los-animales.jpg",
  ];
  const [actual, setActual] = useState(0);

  const next = () => {
    console.log("arriba");
    console.log(imatges.length);
    if (actual >= imatges.length - 1) {
      setActual(0);
    } else {
      setActual((n) => n + 1);
    }
  };

  const last = () => {
    if (actual <= 0) {
      setActual(imatges.length - 1);
    } else {
      setActual(actual - 1);
    }
  };

  const act = (m) => {
    setActual(m);
  };
  return (
    <div className="App">
      <Botons value={"<"} funcioClicar={last} />

      <Imatge src={imatges[actual]} />

      <Botons value={">"} funcioClicar={next} />
      <br />
      {imatges.map((imatge, index) => (
        <Botons value={index + 1} funcioClicar={() => act(index)} />
      ))}
    </div>
  );
}

export default Carrusel;
