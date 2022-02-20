const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('My server in express');
});

app.get('/nueva-ruta', (req, res) => {
  res.send('Hola esta es una nueva ruta');
});

app.get('/productos', (req, res) => {
  res.json({
    name: 'Product',
    price: 1500,
  });
});

app.get('/categories', (req, res) => {
  res.json({
    name: 'Tools',
  });
});

app.listen(port, () => {
  console.log('my port', port);
});
