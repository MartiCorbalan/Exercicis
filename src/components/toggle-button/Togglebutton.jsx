import { useState } from "react";
function Togglebutton() {
  const [boton, setButton] = useState("botongrey");
  const [paraula, setParaula] = useState("");

  const canviColor = () => {
    console.log("hola");

    boton === "botongrey" ? setButton("botongold") : setButton("botongrey");
    paraula === "" ? setParaula("clicat") : setParaula("");
  };
  return (
    <div className="App">
      <br />
      <div className="caja-paraula">
        <br />
        <button onClick={canviColor} className={boton}>
          clicar
        </button>
        <br /> <br />
        <p>{paraula}</p>
      </div>
    </div>
  );
}

export default Togglebutton;
