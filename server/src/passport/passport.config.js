const md5 = require('md5');
const passport = require('passport');
const JWTstrategy = require('passport-jwt');
const localStrategy = require('passport-local');
const User = require('../models/userModel');

passport.use(
  'signup',
  new localStrategy.Strategy(
    {
      usernameField: 'email',
      passwordField: 'password',
      passReqToCallback: true
    },
    async (req, email, password, done) => {
      try {
        const user = await User.create({
          email,
          password: md5(password),
          avatar: req.body.avatar,
          alias: req.body.alias,
          cart: req.body.cart
        });
        return done(null, user);
      } catch (error) {
        return done(error);
      }
    }
  )
);

passport.use(
  'login',
  new localStrategy.Strategy(
    {
      usernameField: 'email',
      passwordField: 'password'
    },
    async (email, password, done) => {
      try {
        const user = await User.findOne({ email });

        if (!user) {
          return done(null, false, { message: 'User not found' });
        }

        if (!user.isValidPassword(password)) {
          return done(null, false, { message: 'Wrong Password' });
        }

        return done(null, user, { message: 'Logged in Successfully' });
      } catch (error) {
        return done(error);
      }
    }
  )
);

passport.use(
  new JWTstrategy.Strategy(
    {
      secretOrKey: process.env.JWT_SECRET,
      jwtFromRequest: JWTstrategy.ExtractJwt.fromAuthHeaderAsBearerToken()
    },
    async (token, done) => {
      try {
        return done(null, token.user);
      } catch (error) {
        return done(error);
      }
    }
  )
);
