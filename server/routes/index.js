const express = require('express');
const app = express();

app.get("/", (req, res) => {
    res.json({
        status: "Corriendo",
        att: "By: Telmo"
    })
});

app.use(require('../routes/authentication'));
app.use(require('../routes/usuario'));
app.use(require('../routes/area'));
app.use(require('../routes/zona'));
app.use(require('../routes/lugar'));
app.use(require('../routes/estado'));
app.use(require('../routes/ticket'));
app.use(require('../routes/factura'));
app.use(require('../routes/butaca'));
app.use(require('../routes/tipoevento'));
app.use(require('../routes/eventos'));


module.exports = app;