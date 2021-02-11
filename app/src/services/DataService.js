import api from './api';

const getData = () => {
  return api.get('/products');
};

const getDataCode = code => {
  return api.get(`/projects/${code}`);
};

export default {
  getData,
  getDataCode,
};
