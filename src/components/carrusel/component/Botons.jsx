export default function Botons({ funcioClicar, value, value2 }) {
  return (
    <button className="botones" onClick={() => funcioClicar()} value2={value2}>
      {value}
    </button>
  );
}
