const express = require('express');
const app = express();
const morgan = require("morgan");
require('./config/config');
require('../server/middlewares/image')
//middlewares
app.use(morgan("dev"));
app.use(express.json());

//rutas
const pool = require("../server/config/db");


app.use(require('./routes/index'));

app.listen(process.env.PORT, () => console.log(`Listening on port ${process.env.PORT}`));