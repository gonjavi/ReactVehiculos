import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import ProgressBar from 'react-animated-progress-bar';

const Grafica = props => {
  const { carrosLista } = props;
  const { recordset, loading, error } = carrosLista;

  if (loading) return <div> Loading...</div>;
  if (error) return <div>{error}</div>;

  const total = recordset.length;

  const totalMercedes = recordset.filter(element => element.marca === 'Mercedes').length;
  const totalNissan = recordset.filter(element => element.marca === 'Nissan').length;
  const totalMazda = recordset.filter(element => element.marca === 'Mazda').length;
  const totalOpel = recordset.filter(element => element.marca === 'Opel').length;
  const porcentajeMercedes = Math.round((totalMercedes / total) * 100);
  const porcentajeNissan = Math.round((totalNissan / total) * 100);
  const porcentajeMazda = Math.round((totalMazda / total) * 100);
  const porcentajeOpel = Math.round((totalOpel / total) * 100);
  return (
    <Container>
      <Row className="text-center">
        <Col xs={12}>
          <h1 className="title">Automoviles</h1>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={12}>
          <NavLink to="/" className="back"><h5>Volver a Inicio</h5></NavLink>
        </Col>
      </Row>
      <Row xs={12} className="mt-5">
        <Col md={4}>
          <h5>Porcentaje Mercedes</h5>
        </Col>
        <ProgressBar
          width="400px"
          height="10px"
          rect
          fontColor="white"
          percentage={porcentajeMercedes}
          rectPadding="1px"
          rectBorderRadius="20px"
          trackPathColor="transparent"
          bgColor="white"
          trackBorderColor="grey"
        />
      </Row>
      <Row xs={12} className="mt-5">
        <Col md={4}>
          <h5>Porcentaje Nissan</h5>
        </Col>
        <ProgressBar
          width="400px"
          height="10px"
          rect
          fontColor="white"
          percentage={porcentajeNissan}
          rectPadding="1px"
          rectBorderRadius="20px"
          trackPathColor="transparent"
          bgColor="white"
          trackBorderColor="grey"
        />
      </Row>
      <Row xs={12} className="mt-5">
        <Col md={4}>
          <h5>Porcentaje Mazda</h5>
        </Col>
        <ProgressBar
          width="400px"
          height="10px"
          rect
          fontColor="white"
          percentage={porcentajeMazda}
          rectPadding="1px"
          rectBorderRadius="20px"
          trackPathColor="transparent"
          bgColor="white"
          trackBorderColor="grey"
        />
      </Row>
      <Row xs={12} className="mt-5">
        <Col md={4}>
          <h5>Porcentaje Opel</h5>
        </Col>
        <ProgressBar
          width="400px"
          height="10px"
          rect
          fontColor="white"
          percentage={porcentajeOpel}
          rectPadding="1px"
          rectBorderRadius="20px"
          trackPathColor="transparent"
          bgColor="white"
          trackBorderColor="grey"
        />
      </Row>
    </Container>
  );
};

Grafica.propTypes = {
  carrosLista: PropTypes.objectOf(PropTypes.any).isRequired,
};

const mapStateToProps = state => ({
  carrosLista: state.carrosLista,
});

export default connect(mapStateToProps)(Grafica);
