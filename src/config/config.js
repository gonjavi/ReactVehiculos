const prod = {
  url: {
    API_URL: 'https://node-vehiculos-api.herokuapp.com',
  },
};

const dev = {
  url: {
    API_URL: 'https://node-vehiculos-api.herokuapp.com',
  },
};

const config = process.env.NODE_ENV === 'development' ? dev : prod;

export default config;
