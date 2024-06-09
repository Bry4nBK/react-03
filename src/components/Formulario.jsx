import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const Formulario = ({ setAlert, agregarColaborador }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    edad: "",
    cargo: "",
    telefono: "",
    experiencia: ""
  });

  const { name, email, edad, cargo, telefono, experiencia } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const validarEmail = (email) => {
    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  };

  const validarTelefono = (telefono) => {
    return /^\d+$/.test(telefono); 
  };

  const validarDatos = (e) => {
    e.preventDefault();

    if (!validarEmail(email)) {
      setAlert({ message: "El email no es válido", type: "danger" });
      return;
    }

    if (!validarTelefono(telefono)) {
      setAlert({ message: "El teléfono debe contener solo números", type: "danger" });
      return;
    }

    if (
      name === "" ||
      email === "" ||
      edad === "" ||
      cargo === "" ||
      telefono === "" ||
      experiencia === ""
    ) {
      setAlert({ message: "Completa todos los campos!", type: "danger" });
      return;
    }

    const nuevoColaborador = {
      nombre: name,
      correo: email,
      edad: edad,
      cargo: cargo,
      telefono: telefono,
      experiencia: experiencia
    };

    agregarColaborador(nuevoColaborador);
    setAlert({ message: "Registro exitoso", type: "success" });

    setFormData({
      name: "",
      email: "",
      edad: "",
      cargo: "",
      telefono: "",
      experiencia: ""
    });
  };

  return (
    <Form className="formulario bg-success p-4 rounded" onSubmit={validarDatos}>
      <Form.Group controlId="formNombre">
        <Form.Label className="text-white">Nombre</Form.Label>
        <Form.Control
          type="text"
          placeholder="Nombre"
          name="name"
          value={name}
          onChange={handleChange}
          className="bg-light"
        />
      </Form.Group>
      <Form.Group controlId="formEmail">
        <Form.Label className="text-white">Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={handleChange}
          className="bg-light"
        />
      </Form.Group>
      <Form.Group controlId="formEdad">
        <Form.Label className="text-white">Edad</Form.Label>
        <Form.Control
          type="number"
          placeholder="Edad"
          name="edad"
          value={edad}
          onChange={handleChange}
          className="bg-light"
        />
      </Form.Group>
      <Form.Group controlId="formCargo">
        <Form.Label className="text-white">Cargo</Form.Label>
        <Form.Control
          type="text"
          placeholder="Cargo"
          name="cargo"
          value={cargo}
          onChange={handleChange}
          className="bg-light"
        />
      </Form.Group>
      <Form.Group controlId="formTelefono">
        <Form.Label className="text-white">Teléfono</Form.Label>
        <Form.Control
          type="text"
          placeholder="Teléfono"
          name="telefono"
          value={telefono}
          onChange={handleChange}
          className="bg-light"
        />
      </Form.Group>
      <Form.Group controlId="formExperiencia">
        <Form.Label className="text-white">Años de experiencia</Form.Label>
        <Form.Control
          type="number"
          placeholder="Años de experiencia"
          name="experiencia"
          value={experiencia}
          onChange={handleChange}
          className="bg-light"
        />
      </Form.Group>
      <Button variant="light" type="submit" className="mt-3">
        Agregar colaborador
      </Button>
    </Form>
  );
};

export default Formulario;
