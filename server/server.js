const express = require('express');
const app = express();

require('./config/config');

app.use(require('./routes/index'));

app.listen(process.env.PORT, () => console.log(`Listening on port ${process.env.PORT}`));