import React from 'react';
import {
  BrowserRouter, Switch, Route, NavLink,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import traerCarros from '../actions/carroAction';
import CarroLista from '../contenedores/CarroLista';
import Grafica from './Grafica';
import Actualizar from './Actualizar';
import { getProductsError } from '../reducers/carroReducer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentRender = this.shouldComponentRender.bind(this);
  }

  componentDidMount() {
    const { traerCarros } = this.props;
    traerCarros();
  }

  shouldComponentRender() {
    const { pending } = this.props;
    if (pending === false) return false;
    return true;
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar bg="light" className=" justify-content-between" expand="lg">
            <Navbar.Brand className="ml-5">Automoviles</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Nav className="ml-auto">
              <NavLink to="/" className="mr-2 link">Inicio</NavLink>
              <NavLink to="/grafica" className="mr-5 link">Graficas</NavLink>
            </Nav>
          </Navbar>
          <main className="container main">

            <Switch>
              <Route exact path="/" component={CarroLista} />
              <Route path="/grafica" component={Grafica} />
              <Route path="/actualizar/:id" component={Actualizar} />
            </Switch>

          </main>
          <footer className="footer">
            Derechos reservados
          </footer>
        </div>
      </BrowserRouter>
    );
  }
}

App.defaultProps = {
  pending: true,
};
App.propTypes = {
  traerCarros: PropTypes.func.isRequired,
  pending: PropTypes.bool,
};

const mapStateToProps = state => ({
  error: getProductsError(state),
  pending: state.pending,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  traerCarros,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
