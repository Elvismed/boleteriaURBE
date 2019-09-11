const express = require('express');
const app = express();

app.use(require('../routes/authentication'));
app.use(require('../routes/usuario'));
app.use(require('../routes/area'));
app.use(require('../routes/zona'));
app.use(require('../routes/lugar'));
app.use(require('../routes/estado'));
app.use(require('../routes/reserva'));
app.use(require('../routes/factura'));


app.get("/",(req,res)=>{
    res.json({
        status:"Corriendo",
        att:"Telmo"
    })
});

module.exports = app;