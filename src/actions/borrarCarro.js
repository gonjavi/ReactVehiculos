import axios from 'axios';
import config from '../config/config';

const url = config.url.API_URL;

const borrarCarroApi = async id => {
  await axios.delete(`${url}/vehiculo/${id}`)
    .then(res => {
      window.location.reload(false);
      return res;
    }).catch(error => error);
};

export default borrarCarroApi;
