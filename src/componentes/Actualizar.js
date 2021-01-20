import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { actualizar } from '../actions/actualizar';
import { NavLink } from 'react-router-dom';

const Actualizar = props => { 
  const [linea1, setLinea1] = useState('');
  const [marca1, setMarca1] = useState('');
  const [modelo1, setModelo1] = useState('');
  const [color1, setColor1] = useState('');
  const [foto1, setFoto1] = useState('');  
  const carrosLista  = useSelector(state => state.carrosLista);
   const { recordset} = carrosLista;
  const {
    match,
  } = props;
  const { params } = match;
  const { id } = params;

  let carro;
  for (const key in recordset) {
    if (Object.prototype.valueOf.call(recordset, key)) {
      if (key === id) {
        carro = recordset[key];
      } 
    }
  }
     
  
  const carroActualizado = useSelector(state => state.carroActualizado);
  const { carroInfo } = carroActualizado;
  
  const dispatch = useDispatch();

  useEffect(() => {
    if (carroInfo) {
      props.history.push("/");
    }
    return () => {

    }
  }, [carroInfo]);

  const submitHandler = e => {
    dispatch(actualizar(id, linea1, marca1, modelo1, color1, foto1));
  }
  const handleImage = e => {
    const Imagen = e.target.files[0];
    crearImagenBase64(Imagen);
    
  }
  const crearImagenBase64 = file => {
    const reader = new FileReader();

    reader.onload = e => {
      setFoto1(e.target.result);
    };
    
    reader.readAsDataURL(file);
  }
  

  return (
    <div>             
      <NavLink to="/"><h5 className="back">Ir a Inicio</h5></NavLink>   
      <Form onSubmit={submitHandler}>
      <h5>Actualizar Automovil: </h5>    
        <Form.Row>         
          <Form.Group as={Col} md="3" controlId="validationCustom01">
            <Form.Label>Linea</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="linea"
              onChange={(e) => setLinea1(e.target.value)}
            />         
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom01">
            <Form.Label>Marca</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="marca"
              onChange={(e) => setMarca1(e.target.value)}
            />         
          </Form.Group>
          
          <Form.Group as={Col} md="3" controlId="validationCustom01">
            <Form.Label>Modelo</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="modelo"
              onChange={(e) => setModelo1(e.target.value)}
            />         
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom01">
            <Form.Label>Color</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="color"
              onChange={(e) => setColor1(e.target.value)}
            />         
          </Form.Group> 
          <Form.Group as={Col} md="3">
              <Form.File
                className="position-relative"
                required
                name="file"
                label="Foto"
                onChange={handleImage}
                id="validationFormik107"
                feedbackTooltip
              />
          </Form.Group>
        </Form.Row>
        <Form.Row>       
          <Form.Group as={Col} md="3">
            <Button type="submit">Actualizar</Button>
          </Form.Group>                
        
      </Form.Row>   
    </Form>
    </div>
  );
}

Actualizar.defaultProps = {
  
}
Actualizar.propTypes = {  
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};
export default Actualizar;

