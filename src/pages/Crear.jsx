import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { createProvincia } from "../service/provincia";
import "../App.css";

const Crear = () => {
  const [provincia, setProvincia] = useState({
    id: "",
    nombre: "",
  });

  const handleOnchage = (e) => {
    const { name, value } = e.target;
    setProvincia({
      ...provincia,
      [name]: value,
    });
  };

  return (
    <div className="container-create">
      <p>Crear Provincia</p>
      <div>
        <label>Nombre:</label>
        <input
          placeholder="ingrese nombre"
          name="nombre"
          onChange={(e) => handleOnchage(e)}
        />
      </div>
      <div
        style={{
          marginTop: "1rem",
          display: "flex",
          gap: "1rem",
          justifyContent: "center",
        }}>
        <NavLink to={"/"}>
          <button onClick={() => createProvincia(provincia)}>Crear</button>
        </NavLink>
        <NavLink to={"/"}>
          <button>Cancelar</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Crear;
