const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const helmet = require('helmet');
const path = require('path');
const logger = require('morgan');

const router = require('./router');
const middlewares = require('./middlewares');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', router);
app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

app.use(express.json);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger('dev'));
app.use(cors());
app.use(helmet());

const port = process.env.PORT || 8080;

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running at http://localhost:${port}`);
});
