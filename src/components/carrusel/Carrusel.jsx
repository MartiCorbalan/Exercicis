import Imatge from "./component/Imatge";
import Botons from "./component/Botons";

import { useState } from "react";
function Carrusel() {
  let imatges = [
    "https://www.bbva.com/wp-content/uploads/2021/03/animales-peligro-extincion-sostenibilidad-bbva.jpg",

    "http://www.masquesaludanimal.es//posts/asset_upload_file39075_613728.jpg",

    "https://www.hogarmania.com/archivos/202109/animales-felices-portada-1280x720x80xX.jpg",

    "https://www.fundacion-affinity.org/sites/default/files/dia-de-los-animales.jpg",
  ];

  const [actual, setActual] = useState();

  const next = () => {};
  const last = () => {};
  return (
    <div className="App">
      <Botons value={"<"} funcioClicar={last} />

      <Imatge src={imatges[0]} />

      <Botons value={">"} funcioClicar={next} />
    </div>
  );
}

export default Carrusel;
