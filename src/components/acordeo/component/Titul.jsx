export default function Titul({
  funcioClicar,
  text,
  descripcio,
  clas,
  ntitle,
}) {
  return (
    <>
      <div className={"title "}>
        <p className="acordeo" onClick={() => funcioClicar(ntitle)}>
          {text}
        </p>
        <p className={clas}>{descripcio}</p>
      </div>
    </>
  );
}
