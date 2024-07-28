const jwt = require('jsonwebtoken');
const axios = require('axios');
const { USER_CREDENTIALS, USER } = require('../utils/const');
const { jwtSecret, jwtExpiresIn } = require('../utils/environment');

const signIn = (req, res) => {
  const { username, password } = req.body;

  if (
    username === USER_CREDENTIALS.email &&
    password === USER_CREDENTIALS.password
  ) {
    jwt.sign(USER, jwtSecret, { expiresIn: jwtExpiresIn }, (err, token) => {
      if (err) {
        console.log(err);
        res.status(500).send({
          success: false,
        });
      }

      res.header('Authorization', `Bearer ${token}`);
      res.status(200).send(token);
    });
  } else {
    console.log('ERROR: Could not log in');
    res.status(500).send({
      success: false,
    });
  }
};

const deleteJoke = async (req, res) => {
  axios
    .post('http://localhost:3003/deleteJoke', {
      ...req.body,
    })
    .then(() => {
      res.status(200).send({
        success: true,
      });
    })
    .catch(() => {
      res.status(500).send({
        success: false,
      });
    });
};

const getNewJoke = async (_, res) => {
  axios
    .get('http://localhost:3003/fetchUnmoderatedJoke')
    .then(function (response) {
      res.status(200).send({
        success: true,
        data: response.data.data,
      });
    })
    .catch(function (error) {
      res.status(500).send({
        success: false,
      });
    });
};

const addJoke = async (req, res) => {
  axios
    .post('http://localhost:3001/addJoke', {
      ...req.body,
    })
    .then(() => {
      res.status(200).send({
        success: true,
      });
    })
    .catch(() => {
      res.status(500).send({
        success: false,
      });
    });
};

module.exports = {
  deleteJoke,
  getNewJoke,
  addJoke,
  signIn,
};
