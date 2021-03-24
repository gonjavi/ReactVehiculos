import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import BorrarCarroApi from '../actions/borrarCarro';

const Carro = props => {
  const {
    vehiculo,
  } = props;

  const {
    _id, linea, marca, modelo, foto,
  } = vehiculo;

  function borrarCarro() {
    BorrarCarroApi(_id);
    window.location.reload(false);
  }

  return (
    <div key={_id} className="carro">
      <div className="cuadro">
        <ul className="titulo">
          <li>
            {' '}
            Linea:
            {linea}
          </li>
          <li>
            {' '}
            Marca:
            {marca}
          </li>
          <li>
            {' '}
            Modelo:
            {modelo}
          </li>
          <li><button type="button" className="borrarActualizar" onClick={borrarCarro}>Eliminar</button></li>
          <li>
            {' '}
            <Link
              className="borrarActualizar"
              to={{
                pathname: `actualizar/${_id}`,
                actualizarProps: {
                  vehiculo: { vehiculo },
                },
              }}
            >
              Actualizar
            </Link>
          </li>
        </ul>
      </div>
      <img
        className="picture"
        alt={linea}
        width="50%"
        height="60%"
        src={foto}
      />

    </div>
  );
};
Carro.defaultProps = {
  vehiculo: {},
};

Carro.propTypes = {
  vehiculo: PropTypes.objectOf(PropTypes.any),
};
export default Carro;
