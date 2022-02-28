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
import ExArray2 from "../exercici-2-array/ExArray2";
import ExArray3 from "../exercici-3-array/ExArray3";
import ExArray4 from "../exercici-4-array/ExArray4";
import ExArray5 from "../exercici-5-array/ExArray5";
import ExArray6 from "../exercici-6-arrays/ExArray6";
import CounteruseState from "../contador-useState/CounteruseState";
import CounteruseReducer from "../contador-useReducer/CounteruseReducer";
import UseReducerPatrons from "../contador-useReducer-patrons/UseReducerPatrons";
import CounterRedux from "../counter-redux/CounterRedux";
import CounterReduxPatrons from "../contador-redux-patrons/CounterReduxPatrons";
import GraellaUseReducer from "../graella-use-reducer/GraellaUseReducer";
import GraellaUseReducerPatrons from "../graella-use-reducer-patrons/GraellaUseReducerPatrons";
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
  { path: "Ex-array-1", titol: "ex array 1", element: <ExArray1 /> },
  { path: "Ex-array-2", titol: "ex array 2", element: <ExArray2 /> },
  { path: "Ex-array-3", titol: "ex array 3", element: <ExArray3 /> },
  { path: "Ex-array-4", titol: "ex array 4", element: <ExArray4 /> },
  { path: "Ex-array-5", titol: "ex array 5", element: <ExArray5 /> },
  { path: "Ex-array-6", titol: "ex array 6", element: <ExArray6 /> },
  {
    path: "CounteruseState",
    titol: "counteruseState",
    element: <CounteruseState />,
  },
  {
    path: "CounteruseReducer",
    titol: "counteruseReducer",
    element: <CounteruseReducer />,
  },
  {
    path: "CounterUseReducerPatrons",
    titol: "CounterUseReducerPatrons",
    element: <UseReducerPatrons />,
  },
  {
    path: "CounterRedux",
    titol: "CounterRedux",
    element: <CounterRedux />,
  },
  {
    path: "CounterReduxPatrons",
    titol: "CounterReduxPatrons",
    element: <CounterReduxPatrons />,
  },
  {
    path: "GraellaUseReducer",
    titol: "GraellaUseReducer",
    element: <GraellaUseReducer />,
  },
  {
    path: "GraellaUseReducerPatrons",
    titol: "GraellaUseReducerPatrons",
    element: <GraellaUseReducerPatrons />,
  },
];

export default Llista;
