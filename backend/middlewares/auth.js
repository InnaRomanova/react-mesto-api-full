const jwt = require('jsonwebtoken');
const { getJWTSecretKey } = require('../utils/utils');
const UnauthorixedErrorCode = require('../errors/unauthorixedErrorCode');

module.exports = (req, _, next) => {
  const { token } = req.cookies;
  if (!token) {
    throw new UnauthorixedErrorCode('Необходима авторизация 1');
  }

  let payload;
  // верифицирую токен
  try {
    payload = jwt.verify(token, getJWTSecretKey());
    console.log(payload);
  } catch (err) {
    return next(new UnauthorixedErrorCode('Необходима авторизация 2'));
    // отправляю ошибку, если не получилось
  }
  // записываю пейлоуд в объект запроса
  req.user = payload;
  // пропускаю запрос дальше
  return next();
};
