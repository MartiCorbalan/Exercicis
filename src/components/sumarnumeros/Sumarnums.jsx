import { useEffect, useState } from "react";

function Sumarnums() {
  const [numero, setNumero] = useState(0);
  const [total, setTotal] = useState(0);

  const sumar = () => {
    if (total === 0) {
      setTotal(numero);
      setNumero(0);
    } else {
      setTotal(parseInt(total) + parseInt(numero));
    }
    console.log(total);
    setNumero(0);
  };
  const reset = () => {
    setTotal(0);
    setNumero(0);
  };
  return (
    <div className="App">
      <br />

      <h2>Sumador de numeros</h2>
      <div className="sum-num">
        <div className="">
          <p
            style={{
              color: `#fff`,
            }}
          >
            Valor:{" "}
          </p>
          <input
            type="number"
            onChange={(event) => {
              setNumero(event.target.value);
            }}
          />
        </div>
        <div>
          <p
            style={{
              color: `#fff`,
            }}
          >
            Total:{" "}
          </p>
          <input type="number" value={total} />
        </div>

        <button className="btn btn-danger" onClick={sumar}>
          Sumar
        </button>

        <button className="btn btn-dark" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Sumarnums;
