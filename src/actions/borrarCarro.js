import axios from 'axios';

const borrarCarroApi = async id => {
  await axios.delete(`http://localhost:3001/vehiculo/${id}`)
    .then(res => {
      window.location.reload(false);
      return res;
    }).catch(error => error);
};

export default borrarCarroApi;
