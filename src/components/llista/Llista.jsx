import Graella from "../graella/Graella";
import Contador from "../contador/Contador";
import Acordeo from "../acordeo/Acordeo";
import Carrusel from "../carrusel/Carrusel";
import Tresenratlla from "../tres-en-ratlla/Tresenratlla";
import Sumarnums from "../sumarnumeros/Sumarnums";
import Rellotgeanalogic from "../rellotge-analogic/Rellotgeanalogic";
import Rellotge from "../rellotge-digital/Rellotge";

const Llista = [
  { path: "comptador", titol: "Comptador", element: <Contador /> },
  { path: "graella", titol: "Graella de fotos", element: <Graella /> },
  { path: "acordeo", titol: "Acordeo", element: <Acordeo /> },
  { path: "carrusel", titol: "Carrusel", element: <Carrusel /> },
  {
    path: "tres-en-ratlla",
    titol: "Tres en ratlla",
    element: <Tresenratlla />,
  },
  { path: "sumarnumeros", titol: "Sumar numeros", element: <Sumarnums /> },
  {
    path: "rellotge-analogic",
    titol: "Rellotge analogic",
    element: <Rellotgeanalogic />,
  },
  { path: "rellotge", titol: "Rellotge", element: <Rellotge /> },
];

export default Llista;
