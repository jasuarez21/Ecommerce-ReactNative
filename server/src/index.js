const express = require('express');
const cors = require('cors');
const chalk = require('chalk');
const passport = require('passport');
const morgan = require('morgan');
const { connect } = require('mongoose');
require('dotenv').config();
const debug = require('debug');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');

const server = express();
require('./passport/passport.config');

server.use(express.urlencoded({ extended: false }));
server.use(express.json());

server.use('/', authRoutes);
server.use(
  '/user',
  passport.authenticate('jwt', { session: false }),
  userRoutes
);

connect(
  process.env.DDBB_URL,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true
  }
);

server.use(cors());
server.use(morgan('dev'));

const motosRouter = require('./routes/motosRouter');

server.use('/motos', motosRouter);

server.listen('2021',
  () => debug(`Server is running in ${chalk.yellow('DDBB_URL')}`));
