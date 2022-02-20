const express = require('express');
const routerApi = require('./routes');

const {
  logErrors,
  errorHandler,
  boomErrorHanddler,
} = require('./middleware/errorHandler');

const app = express();
const port = 3000;

app.use(express.json());

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
