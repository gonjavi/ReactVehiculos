const prod = {
  url: {
    API_URL: 'https://nodevehiculos-backend.herokuapp.com',
  },
};

const dev = {
  url: {
    API_URL: 'http://localhost:3001',
  },
};

const config = process.env.NODE_ENV === 'development' ? dev : prod;

export default config;
