const { Router } = require('express');
const motosController = require('../controllers/motosController')();

function motosRouter() {
  const routes = Router();
  routes
    .route('/')
    .get(motosController.getAll);
  routes
    .route('/:motoId')
    .post(motosController.updateStock);

  return routes;
}

module.exports = motosRouter();
