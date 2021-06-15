/* eslint-disable no-underscore-dangle */
const passport = require('passport');
const { Router } = require('express');
const authController = require('../controllers/authController')();

const authRoutes = Router();

authRoutes.post(
  '/signup',
  passport.authenticate('signup', { session: false }),
  authController.signUp
);

authRoutes.post(
  '/login',
  authController.logIn
);

authRoutes.post('/token', authController.updateToken);

authRoutes.post('/logout', authController.logOut);

module.exports = authRoutes;
