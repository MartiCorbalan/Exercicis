import { useEffect, useState } from "react";

function Rellotge_analogic() {
  const [data, setData] = useState(new Date(0));

  const actualitzarDate = () => {
    
   
    setData(new Date());
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
           /*  transform: `rotate(0deg)` */
            transform: `rotate(${data.getMinutes() * 6}deg)`,
          }}
        ></div>
        <div
          className="hora"
          style={{
            /* transform: `rotate(0deg)` */
            transform: `rotate(${data.getHours()*6}deg)`,
          }}
        ></div>
        <p className="dotze nhora">12</p>
        <p className="tres nhora">3</p>
        <p className="sis nhora">6</p>
        <p className="nou nhora">9</p>
      </div>
    </div>
  );
}

export default Rellotge_analogic;
