const express = require('express');
const app = express();
const morgan = require("morgan");
const path = require('path');

require('./config/config');

require('./middlewares/upload-images')
//middlewares
app.use(morgan("dev"));
app.use(express.json());

//rutas
const pool = require("../server/config/db");


app.use(require('./routes/index'));

app.use(express.static(path.resolve(__dirname, 'public')));

app.listen(process.env.PORT, () => console.log(`Listening on port ${process.env.PORT}`));