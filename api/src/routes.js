/*
We have validateProductStore and post('/product') working.
We just need to uncomment these lines here, in /validator/ProductStore
and /controllers/ProductController store method.
*/

const { Router } = require('express');

const ProductController = require('./app/controllers/ProductController');
// const validateProductStore = require('./app/validators/ProductStore');

const routes = new Router();

routes.get('/', (req, res) => {
  try {
    res.send(200, 'Fullstack Challenge 20201026');
  } catch (error) {
    res.send(500, error);
  }
});
routes.get('/products', ProductController.indexAll);
routes.get('/product/:code', ProductController.index);

// routes.post('/product', validateProductStore, ProductController.store);

module.exports = routes;
