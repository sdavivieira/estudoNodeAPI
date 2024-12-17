const express = require('express');
const routers = require('./src/routes/dogs');
const app = express();

app.use(express.json()); 

app.use(routers);

app.listen(3000, () => {
  console.log('Escutando a porta 3000');
});
