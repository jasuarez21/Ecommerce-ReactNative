/* eslint-disable no-underscore-dangle */
const MOTO = require('../models/motosModel');

function MotosController() {
  async function getAll(req, res) {
    const motos = await MOTO.find();
    res.json(motos);
  }

  async function updateStock(req, res) {
    try {
      const updatedMoto = await MOTO.findByIdAndUpdate(
        req.params.motoId,
        req.body,
        { new: true }
      );
      res.json(updatedMoto);
    } catch (error) {
      res.send(error);
    }
  }

  return {
    getAll,
    updateStock
  };
}

module.exports = MotosController;
