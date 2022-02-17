import { useEffect, useState } from "react";

function Rellotge_analogic() {
  const [data, setData] = useState(new Date(0));

  const actualitzarDate = () => {
    setData(new Date());
    this.setData({
      hour: (Number(data[0]) / 12) * 360 + 90,
      min: (Number(data[1]) / 60) * 360 + 90,
      second: (Number(data[2]) / 60) * 360 + 90,
      time: data,
    });
  };

  useEffect(() => {
    setInterval(actualitzarDate, 1000);
  }, []);

  return (
    <div className="App">
      <br />
      <h2>Rellotge analògic</h2>
      <div className="rellotge">
        <div
          className="segons"
          style={{
            transform: `rotate(${data.getSeconds() * 6}deg)`,
            /* transform: `rotate(${data.getSeconds() * 6}deg)`, */
          }}
        ></div>
        <div
          className="minuts"
          style={{
            transform: `rotate(${data.getMinutes() * 6}deg)`,
          }}
        ></div>
        <div
          className="hora"
          style={{
            transform: `rotate(${data.getHours() * 6}deg)`,
          }}
        ></div>
        <p className="dotze">12</p>
        <p className="tres">3</p>
        <p className="sis">6</p>
        <p className="nou">9</p>
      </div>
    </div>
  );
}

export default Rellotge_analogic;
