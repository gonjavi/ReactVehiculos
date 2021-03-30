import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { actualizar } from '../actions/actualizar';

const Actualizar = props => {
  const [linea, setLinea] = useState('');
  const [marca, setMarca] = useState('');
  const [modelo, setModelo] = useState('');
  const [color, setColor] = useState('');
  const [foto, setFoto] = useState('');
  const { match } = props;
  const { params } = match;
  const { _id } = params;

  const dispatch = useDispatch();

  const submitHandler = () => {
    dispatch(actualizar(_id, linea, marca, modelo, color, foto));
    props.history.push('/');
    window.location.reload();
  };

  const crearImagenBase64 = file => {
    const reader = new FileReader();

    reader.onload = e => {
      setFoto(e.target.result);
    };

    reader.readAsDataURL(file);
  };

  const handleImage = e => {
    const Imagen = e.target.files[0];
    crearImagenBase64(Imagen);
  };

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
              onChange={e => setLinea(e.target.value)}
            />
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom01">
            <Form.Label>Marca</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="marca"
              onChange={e => setMarca(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} md="3" controlId="validationCustom01">
            <Form.Label>Modelo</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="modelo"
              onChange={e => setModelo(e.target.value)}
            />
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom01">
            <Form.Label>Color</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="color"
              onChange={e => setColor(e.target.value)}
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
};

Actualizar.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      _id: PropTypes.string.isRequired,
    }),
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Actualizar;
