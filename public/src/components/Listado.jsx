import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

const Listado = ({ colaboradores, eliminarColaborador }) => {
  return (
    <Table responsive striped bordered hover className="table table-success border border-warning">
      <thead>
        <tr>
          <th>nº</th>
          <th>Nombre</th>
          <th>Correo</th>
          <th>Edad</th>
          <th>Cargo</th>
          <th>Teléfono</th>
          <th>Años de experiencia</th>
          <th>Eliminar</th>
        </tr>
      </thead>
      <tbody>
        {colaboradores.map((colaborador, index) => (
          <tr key={colaborador.id}>
            <td>{index + 1}</td>
            <td>{colaborador.nombre}</td>
            <td>{colaborador.correo}</td>
            <td>{colaborador.edad}</td>
            <td>{colaborador.cargo}</td>
            <td>{colaborador.telefono}</td>
            <td>{colaborador.experiencia}</td>
            <td>
              <Button
                variant="warning"
                onClick={() => eliminarColaborador(colaborador.id)}>
                Eliminar
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default Listado;
