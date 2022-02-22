import { Outlet, Link } from "react-router-dom";
import Llista from "../llista/Llista";
export default function Layout() {
  return (
    <>
      <nav>
        <ul >
          {Llista.map((item) => (
            <li>
              <Link to={item.path}>{item.titol}</Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="title-main">
        <h1>Martí Corbalan Cruz</h1>
        <h4>Exercicis React</h4>
      </div>

      <Outlet />
    </>
  );
}
