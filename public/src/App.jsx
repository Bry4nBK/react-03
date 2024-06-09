import React, { useState } from "react";
import Listado from "./components/Listado";
import Formulario from "./components/Formulario";
import Buscador from "./components/Buscador";
import Alerta from "./components/Alert";
import BaseColaboradores from "./BaseColaboradores";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  const [search, setSearch] = useState("");
  const [alert, setAlert] = useState({ message: "", type: "" });
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);

  const agregar = (nuevoColaborador) => {
    const maxId = colaboradores.reduce(
      (max, colaborador) => Math.max(max, parseInt(colaborador.id)),
      
    );
    nuevoColaborador.id = (maxId + 1).toString();
    setColaboradores([...colaboradores, nuevoColaborador]);
  };

  const eliminar = (id) => {
    setColaboradores((prevColaboradores) =>
      prevColaboradores.filter((colaborador) => colaborador.id !== id)
    );
  };
  
  const colaboradoresFiltrados = search
    ? colaboradores.filter((colaborador) =>
        colaborador.nombre.toLowerCase().includes(search.toLowerCase())
      )
    : colaboradores;

  return (
    <>
      <h1 className="title">Lista de colaboradores</h1>
      <Buscador setSearch={setSearch} />
      <div className="container">
        <Listado
          colaboradores={colaboradoresFiltrados}
          eliminarColaborador={eliminar}
          className="lista-colaboradores" 
        />
        <div>
          <h3 className="title">Agregar colaborador</h3>
          <Formulario
            setAlert={setAlert}
            agregarColaborador={agregar}
          />
          <Alerta message={alert.message} type={alert.type} />
        </div>
      </div>
    </>
  );
};

export default App;
