import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { updateProvincia, findProvincia } from "../service/provincia";

const Actualizar = () => {
  const local = useLocation();
  const id = local.pathname.split("/")[1];
  const [provincia, setProvincia] = useState({});

  const handleOnchage = (e) => {
    const { name, value } = e.target;
    setProvincia({
      ...provincia,
      [name]: value,
    });
  };

  useEffect(() => {
    findProvincia(id, setProvincia);
  }, []);
  return (
    <div className="container-create">
      <p>Editar Provincia</p>
      <div>
        <label>Nombre:</label>
        <input
          placeholder="ingrese nombre"
          name="nombre"
          value={provincia.nombre}
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
          <button onClick={() => updateProvincia(provincia)}>Editar</button>
        </NavLink>
        <NavLink to={"/"}>
          <button>Cancelar</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Actualizar;
