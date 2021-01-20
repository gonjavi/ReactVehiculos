import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';

const MarcaFilter = props => {
  const [category, setCategory] = useState('Todos');

  function handleChange(e) {
    const { target: { value, name } } = e;
    setCategory({
      [name]: value,
    });
    const { handleFilterChange } = props;
    handleFilterChange(value);
  }
  return (
    <div>
      <Form>
        <Form.Group className="categories" controlId="Form.ControlSelect1">
          <Form.Label className="categ-title">Agrupar por marca</Form.Label>
          <Form.Control name="category" value={category} onChange={handleChange} as="select">
            <option>Vehiculos</option>
            <option value="Todos">Todos</option>
            <option value="Nissan">Nissan</option>
            <option value="Mercedes">Mercedes</option>
            <option value="Mazda">Mazda</option>
            <option value="Opel">Opel</option>           
          </Form.Control>
        </Form.Group>
      </Form>
    </div>
  );
};

MarcaFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};

export default MarcaFilter;