/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
const passport = require('passport');
const jwt = require('jsonwebtoken');

let refreshTokens = [];

function authController() {
  async function signUp(req, res) {
    res.json({
      message: 'Signup successful',
      user: req.user
    });
  }

  async function logIn(req, res, next) {
    passport.authenticate(
      'login',
      async (err, user) => {
        try {
          if (err || !user) {
            const error = new Error('An error occurred.');

            return next(error);
          }

          return req.login(
            user,
            { session: false },
            async (error) => {
              if (error) return next(error);

              const data = { _id: user._id, email: user.email };
              const token = jwt.sign(
                { user: data },
                process.env.JWT_SECRET,
                { expiresIn: '30m' }
              );
              const refreshToken = jwt.sign(
                { user: data },
                process.env.JWT_SECRET
              );

              refreshTokens.push(refreshToken);

              return res.json({
                token,
                refreshToken,
                user
              });
            }
          );
        } catch (error) {
          return next(error);
        }
      }
    )(req, res, next);
  }

  function updateToken(req, res) {
    const { token } = req.body;

    if (!token) {
      return res.sendStatus(401);
    }

    if (!refreshTokens.includes(token)) {
      return res.sendStatus(403);
    }

    return jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }

      const data = { _id: user._id, email: user.email };

      const accessToken = jwt.sign(
        { user: data },
        process.env.JWT_SECRET,
        { expiresIn: '30m' }
      );

      return res.json({
        accessToken
      });
    });
  }

  function logOut(req, res) {
    const { token } = req.body;
    refreshTokens = refreshTokens.filter((current) => current !== token);

    res.send('Logout successful');
  }

  return {
    signUp,
    logIn,
    updateToken,
    logOut
  };
}

module.exports = authController;
