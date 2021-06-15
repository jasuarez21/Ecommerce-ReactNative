/* eslint-disable no-console */
const { Router } = require('express');
const User = require('../models/userModel');

const authRoutes = Router();

authRoutes.get(
  '/profile',
  (req, res) => {
    res.json({
      message: 'You made it to the secure route',
      user: req.alias,
      token: req.headers.authorization
    });
  }
);

authRoutes.post(
  '/order',
  async (req, res) => {
    try {
      const updatedUser = await User.findByIdAndUpdate(req.body,
        { ...req.body },
        { new: true });
      return res.json({
        updatedUser
      });
    } catch (error) {
      return res.status(404);
    }
  }
);

authRoutes.delete(
  '/delete',
  async (req, res) => {
    try {
      await User.findOneAndDelete(req.body);
      return res.json(
        'Deleted'
      );
    } catch (error) {
      return res.status(404);
    }
  }
);

module.exports = authRoutes;
