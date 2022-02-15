export default function Titul({
  funcioClicar,
  text,
  descripcio,
  clas,
  ntitle,
}) {
  return (
    <>
      <div className={"title"} onClick={() => funcioClicar(ntitle)}>
        <p>{text}</p>
        <p className={clas}>{descripcio}</p>
      </div>
    </>
  );
}
