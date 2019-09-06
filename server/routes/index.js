const express = require('express');
const app = express();

app.use(require('../routes/authentication'));
app.use(require('../routes/usuario'));
app.use(require('../routes/datosPersonales'));


module.exports = app;