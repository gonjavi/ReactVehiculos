import axios from 'axios';

const borrarCarroApi = id => {
  axios.delete(`http://localhost:3001/vehiculo/${id}`)
    .then(res => {
      if (res.error) {
        throw (res.error);
      }
      window.location.reload(false);
      return res;
    }).catch(error => error);
};

export default borrarCarroApi;
