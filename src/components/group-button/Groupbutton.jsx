import { useState } from "react";
function Groupbutton() {
  let botones = ["A", "B", "C"];
  const [boton, setButton] = useState("");

  const canvi = (index) => {
    console.log("hola");

    setButton(index);
    /* setButton(index); */
  };

  return (
    <div className="App">
      <br />
      <div className="caja-paraula">
        <br />
        {botones.map((btn, index) => (
          <button
            className={index === boton ? "botongold" : ""}
            onClick={() => canvi(index)}
          >
            {botones[index]}
          </button>
        ))}
        <br />
        <p>{botones[boton]} </p>
      </div>
    </div>
  );
}

export default Groupbutton;
