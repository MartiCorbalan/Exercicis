import "./App.css";
import "./style.css";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";

import Layout from "./components/layout/Layout";
import Llista from "./components/llista/Llista";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {Llista.map((item) => (
            <Route path={item.path} element={item.element} />
          ))}
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
