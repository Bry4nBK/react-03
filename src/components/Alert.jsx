import { Alert } from 'react-bootstrap';

const Alerta = ({ message }) => {
  if (!message) return null;
  return (
    <Alert variant="warning" className="alert-message"> 
      {message}
    </Alert>
  );
};

export default Alerta;
