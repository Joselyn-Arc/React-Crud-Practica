import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Provincia from "./pages/Provincia";
import Eliminar from "./pages/Eliminar";
import Crear from "./pages/Crear";
import Actualizar from "./pages/Actualizar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <NavLink to={"/"}>
            <p style={{ color: "white" }}>Provincias</p>
          </NavLink>
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="container">
          <Routes>
            <Route path="/" element={<Provincia />} />
            <Route path="/guardar" element={<Crear />} />
            <Route path="/:id" element={<Actualizar />} />
            <Route path="/eliminar/:id" element={<Eliminar />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
