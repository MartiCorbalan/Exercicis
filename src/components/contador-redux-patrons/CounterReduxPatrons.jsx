import { Provider } from "react-redux";
import { counter } from "./counter";
import CounterUseReduxPatrons from "./CounterUseReduxPatrons";
import { combineReducers, createStore } from "redux";

//combineReducers es una API per tenir mes dun reducer
/* const = combineReducers({
    counter,
    users,
    llista
}) */
const reducer = combineReducers({
  counter,
});
const store = createStore(reducer);
export default function CounterReduxPatrons() {
  return (
    <>
      <Provider store={store}>
        <CounterUseReduxPatrons />
      </Provider>
    </>
  );
}
