import React, { useEffect, useState } from "react";
import { findAllProvincias } from "../service/provincia";
import "../App.css";
import { NavLink } from "react-router-dom";

const Provincia = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    findAllProvincias(setData);
  }, []);

  return (
    <div style={{ marginTop: "1rem" }}>
      <NavLink to={"/guardar"}>
        <button>Agregar</button>
      </NavLink>

      <table class="table-form">
        <thead>
          <tr>
            <th>id</th>
            <th>nombre</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.nombre}</td>
              <td className="table-option">
                <NavLink to={`${item.id}`}>
                  <button style={{ marginRight: "0.2rem" }}>Editar</button>
                </NavLink>

                <NavLink to={`/`}>
                  <button>Elimiar</button>
                </NavLink>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Provincia;
