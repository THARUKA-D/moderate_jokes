require('dotenv').config();

module.exports = {
  jwtSecret: process.env.JWT_SECRET,
  jwtExpiresIn: process.env.JWT_SECRET_EXPIRE_IN,
  port: process.env.PORT,
}
