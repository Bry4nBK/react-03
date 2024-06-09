import { Form, FormControl, Button } from "react-bootstrap";

const Buscador = ({ setSearch }) => {
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <Form > 
      <div className="d-flex"> 
        <FormControl
          type="text"
          placeholder="Buscar"
          className="mr-sm-2"
          style={{ width: "350px", backgroundColor: "rgb(118, 164, 118)", color: "white" }}
          onChange={handleSearchChange}
        />
        <Button variant="outline-warning">Buscar</Button>
      </div>
    </Form>
  );
};

export default Buscador;
