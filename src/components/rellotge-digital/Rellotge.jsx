import { useEffect, useState } from "react";

function Rellotge() {
  const [data, setData] = useState(new Date());
  const [lookDate, setLookdate] = useState(false);

  const actualitzarDate = () => {
    setData(new Date());
  };
  const Data = () => {
    setLookdate((m) => !m);
  };

  useEffect(() => {
    setInterval(actualitzarDate, 1000);
  }, []);

  /*  const [time, changeTime] = useState(new Date().toLocaleTimeString());

  useEffect(function () {
    setInterval(() => {
      changeTime(new Date().toLocaleTimeString());
    }, 1000);
  }, []); */
  return (
    <div className="App">
      <br />
      <h2>Rellotge digital</h2>
      <div className="box-clock">
        <p className="hora2">
          {data.getHours()}: {data.getMinutes()}: {data.getSeconds()}
        </p>
        <br />
        <p className={"" + (lookDate ? "amagar-data" : "")}>
          {data.toDateString()}
        </p>

        <button className="btn-date" onClick={Data}>
          Veure/Amagar data
        </button>
        {/*  <p>{time}</p> */}
      </div>
    </div>
  );
}

export default Rellotge;
