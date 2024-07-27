const jwt = require('jsonwebtoken');
const axios = require('axios');

const login = (req, res) => {
  const { body } = req;
  const { username } = body;
  const { password } = body;

  if (username === "user" && password === "pass") { //TODO: fetch from DB
    jwt.sign({ user }, 'privatekey', { expiresIn: '1h' }, (err, token) => {
      if (err) { console.log(err) }
      res.send(token);
      res.redirect("https://www.youtube.com", 302);
    });
  } else {
    console.log('ERROR: Could not log in');
  }
}

const deleteJoke = async (req, res) => {

}

const getNewJoke = async (req, res) => {
  axios.get('') // TODO
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    })
}

const addJoke = async (req, res) => {

}

module.exports = {
  deleteJoke,
  getNewJoke,
  addJoke,
  login,
}