const express = require('express');
const app = express();

app.use(require('../routes/authentication'));
app.use(require('../routes/usuario'));
app.use(require('../routes/area'));
app.use(require('../routes/zona'));
app.use(require('../routes/lugar'));
app.use(require('../routes/estado'));
app.use(require('../routes/reserva'));
<<<<<<< HEAD
app.use(require('../routes/ticket'));
=======
app.use(require('../routes/factura'));
>>>>>>> 0934286f31cd3b35e6a329c70601cf80e27a3bb8


app.get("/",(req,res)=>{
    res.json({
        status:"Corriendo",
        att:"Telmo"
    })
});

module.exports = app;