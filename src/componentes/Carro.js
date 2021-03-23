import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import BorrarCarroApi from '../actions/borrarCarro';

const Carro = props => {
  const {
    vehiculo,
  } = props;

  const {
    id, linea, marca, modelo, foto,
  } = vehiculo;
  /* console.log(object); */
  function borrarCarro() {
    BorrarCarroApi(id);
    window.location.reload(false);
  }

  return (
    <div key={id} className="carro">
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
          <li><button className="borrarActualizar" onClick={borrarCarro}>Eliminar</button></li>
          <li>
            {' '}
            <Link
              className="borrarActualizar"
              to={{
                pathname: `actualizar/${id}`,
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
