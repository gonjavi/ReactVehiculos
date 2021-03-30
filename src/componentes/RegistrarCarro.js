import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import registrar from '../actions/registrar';

const RegistrarCarro = props => {
  const [linea, setLinea] = useState('');
  const [marca, setMarca] = useState('');
  const [modelo, setModelo] = useState('');
  const [color, setColor] = useState('');
  const [foto, setFoto] = useState('');
  const carroRegistro = useSelector(state => state.carroRegistro);
  const { carroInfo } = carroRegistro;

  const dispatch = useDispatch();

  useEffect(() => {
    if (carroInfo) {
      props.history.push('/');
    }
    return () => {

    };
  }, [carroInfo]);

  const submitHandler = () => {
    dispatch(registrar(linea, marca, modelo, color, foto));
  };
  const handleImage = e => {
    const Imagen = e.target.files[0];
    // eslint-disable-next-line no-use-before-define
    crearImagenBase64(Imagen);
  };

  const crearImagenBase64 = file => {
    const reader = new FileReader();

    reader.onload = e => {
      setFoto(e.target.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <Form onSubmit={submitHandler}>
      <h5>Registrar Nuevo Automovil</h5>
      <Form.Row>
        <Form.Group as={Col} md="3" controlId="validationCustom01">
          <Form.Label>Linea</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Pathfinder"
            onChange={e => setLinea(e.target.value)}
          />
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom01">
          <Form.Label>Marca</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Nissan"
            onChange={e => setMarca(e.target.value)}
          />
        </Form.Group>

        <Form.Group as={Col} md="3" controlId="validationCustom01">
          <Form.Label>Modelo</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="2020"
            onChange={e => setModelo(e.target.value)}
          />
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom01">
          <Form.Label>Color</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Rojo"
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
          <Button type="submit">Registrar</Button>
        </Form.Group>

      </Form.Row>

    </Form>
  );
};

RegistrarCarro.defaultProps = {
  history: {},
};

RegistrarCarro.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
};

export default RegistrarCarro;
