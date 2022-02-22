import Graella from "../graella/Graella";
import Contador from "../contador/Contador";
import Acordeo from "../acordeo/Acordeo";
import Carrusel from "../carrusel/Carrusel";
import Tresenratlla from "../tres-en-ratlla/Tresenratlla";
import Sumarnums from "../sumarnumeros/Sumarnums";
import Rellotgeanalogic from "../rellotge-analogic/Rellotgeanalogic";
import Rellotge from "../rellotge-digital/Rellotge";
import Togglebutton from "../toggle-button/Togglebutton";
import Groupbutton from "../group-button/Groupbutton";
import ExArray1 from "../exercici-1-array/ExArray1";
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
  { path: "toggle-button", titol: "toggle button", element: <Togglebutton /> },
  { path: "group-button", titol: "group button", element: <Groupbutton /> },
  {path: "Ex-array-1", titol: "ex array 1", element: <ExArray1/>}
];

export default Llista;
