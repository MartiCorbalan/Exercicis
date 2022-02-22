export default function Botons({ funcioClicar, value, clas }) {
  return (
    <>
      <button onClick={() => funcioClicar()}>{(value = "")}</button>
    </>
  );
}
