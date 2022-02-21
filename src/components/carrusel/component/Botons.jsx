export default function Botons({ funcioClicar, value, value2 }) {
  return (
    <button
      className=" btn btn-outline-dark"
      onClick={() => funcioClicar()}
      value2={value2}
    >
      {value}
    </button>
  );
}
