const OPERACIO = "OPERACIO";
export function Operacio(amount) {
  return { type: OPERACIO, amount };
}
const RESET = "RESET";
export function reset() {
  return { type: RESET };
}
export function counter(state, action) {
  switch (action.type) {
    case OPERACIO:
      if (state + action.amount < 0) {
        return 0;
      } else if (state + action.amount > 10) {
        return 10;
      }
      return state + action.amount;
    case RESET:
      return 0;
    default:
      return state;
  }
}
