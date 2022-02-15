export default function Botons({ funcioClicar, value }) {
  return (
    <button className="botones" onClick={() => funcioClicar(value)}>
      {value}
    </button>
  );
}
