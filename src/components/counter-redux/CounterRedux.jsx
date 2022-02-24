import { Provider } from "react-redux";
import { counter } from "./counter";
import CounterUseRedux from "./CounterUseRedux";
import { createStore } from "redux";

const store = createStore(counter, 0);
export default function CounterRedux() {
  return (
    <>
      <Provider store={store}>
        <CounterUseRedux />
      </Provider>
    </>
  );
}
