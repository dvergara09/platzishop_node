const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');

const {
  logErrors,
  errorHandler,
  boomErrorHanddler,
} = require('./middleware/errorHandler');

const app = express();
const port = 3000;

app.use(express.json());

const whiteList = ['http://localhosts:8080', 'https://myapp.co'];
const options = {
  origin: (origin, callback) => {
    if (whiteList.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('no permitido'));
    }
  },
};

app.use(cors(options));
app.get('/', (req, res) => {
  res.send('My server in express');
});

routerApi(app);

app.use(logErrors);
app.use(boomErrorHanddler);
app.use(errorHandler);

app.listen(port, () => {
  console.log('my port', port);
});
