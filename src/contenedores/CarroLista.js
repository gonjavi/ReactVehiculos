import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import changeFilter from '../actions/filter';
import MarcaFilter from '../componentes/MarcaFilter';
import Carro from '../componentes/Carro';
import RegistrarCarro from '../componentes/RegistrarCarro';

class CarroLista extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  handleFilterChange(category) {
    const { changeFilter } = this.props;
    changeFilter(category);
  }

  render() {
    const { carrosLista, filter } = this.props;
    const { recordset, loading, error } = carrosLista;
    if (loading) {
      return <div> Loading...</div>;
    }

    if (error) {
      return <div>{(error)}</div>;
    }

    let NuevaCarroLista;
    if (filter === 'Todos') {
      NuevaCarroLista = recordset.map(
        vehiculo => (
          <Carro vehiculo={vehiculo} key={vehiculo.id} />
        ),
      );
    } else {
      const carroListaFiltered = recordset.filter(carro => carro.marca === filter);
      NuevaCarroLista = carroListaFiltered.map(
        vehiculo => (
          <Carro vehiculo={vehiculo} key={vehiculo.id} />
        ),
      );
    }
    return (
      <Container>
        <Row className="text-center">
          <Col xs={12}>
            <h1 className="title">Automoviles</h1>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12}>
            <NavLink to="/grafica" className="back"><h5 className="back">Ir a graficas</h5></NavLink>
          </Col>
        </Row>
        <Row className="mt-2">
          <Col xs={12} md={5} lg={4}>
            <MarcaFilter handleFilterChange={this.handleFilterChange} />
          </Col>
        </Row>
        <Row xs={12}>
          {NuevaCarroLista}
        </Row>
        <Row>
          <RegistrarCarro />
        </Row>
      </Container>
    );
  }
}

CarroLista.propTypes = {
  carrosLista: PropTypes.objectOf(PropTypes.any).isRequired,
  changeFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  carrosLista: state.carrosLista,
  changeFilter: PropTypes.func.isRequired,
  filter: state.filter,
});

const mapDispatchToProps = dispatch => ({
  changeFilter: category => dispatch(changeFilter(category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CarroLista);
