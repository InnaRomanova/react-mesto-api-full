// require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const { errors } = require('celebrate');
const routers = require('./routes/index');
const errorsHandler = require('./middlewares/errorsHandler');
const { requestLogger, errorLogger } = require('./middlewares/logger');

const { PORT = 3000 } = process.env; // Слушаем 3000 порт

const app = express();

app.use(bodyParser.json());
app.use(cookieParser());
app.use(requestLogger); // подключаем логгер запросов
app.use(routers);
app.use(errorLogger); // подключаем логгер ошибок
app.use(errors());
app.use(errorsHandler);

mongoose.connect('mongodb://127.0.0.1/mestodb');

app.listen(PORT, () => {
  // Если всё работает, консоль покажет, какой порт приложение слушает
  console.log(`App listening on port ${PORT}`);
});
