import "./App.css";
import "./style.css";
import Botons from "./component/Botons";
import Display from "./component/Display";
import { useState } from "react";

function Contador() {
  const [display, setDisplay] = useState(0);
  const [operacio, setOperacio] = useState(null);

  const operar = (input) => {
    setOperacio(input);
    console.log(operacio);
    /* setDisplay(display + parseInt(input)); */
    if (operacio === "+1" && display < 10) {
      console.log("a sumat");
      /* setDisplay(display + parseInt(input)); */
      setDisplay(display + 1);
    } else if (operacio === "+5" && display < 6) {
      /*  setDisplay(display + parseInt(input)); */
      setDisplay(display + 5);
    }
  };

  const restar = () => {
    setDisplay((m) => (m === 0 ? m : display - 1));
  };

  return (
    <div className="App">
      <div>
        <Display text={display} />
      </div>
      <div>
        <Botons value={"+1"} funcioClicar={operar} />
        <Botons value={"-1"} funcioClicar={restar} />
        <Botons value={"+5"} funcioClicar={operar} />
      </div>
    </div>
  );
}

export default Contador;
