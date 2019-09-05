const mysql = require('mysql');

const db = mysql.createConnection({
    database: 'boleteria',
    host: 'localhost',
    user: 'root',
    password: ''
});

db.connect((err) => {
    if(err) {
        console.log(err);
    }

    console.log(`Database connected`);
});

module.exports = db;