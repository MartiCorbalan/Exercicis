export default function Imagen({ funcioClicar, src, clas, nimg }) {
  return (
    <img
      className={"Avatar " + clas}
      src={src}
      onClick={() => funcioClicar(nimg)}
    />
  );
}
