const INCREMENTAR = "INCREMENTAR";
export function Incrementar() {
  return { type: INCREMENTAR };
}
const DECREMENTAR = "DECREMENTAR";
export function Decrementar() {
  return { type: INCREMENTAR };
}

export function fullscreen(state, input) {
  switch (input.type) {
    case INCREMENTAR:
      if (input === state) {
        return null;
      } else {
        console.log("click" + input);
        return input;
      }
    default:
      return input;
  }
}
