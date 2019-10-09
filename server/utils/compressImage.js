'use strict';

const tinify = require('tinify');
const fs = require('fs')
tinify.key = "0gfR9K92n4DVRHFFHBQY2cSDH1JYJbnC" //Colocar un key de urbe

var path = 'server/public/uploads/'
fs.readdir(path, function(err, items) {
    //console.log(items);
    for (var i = 0; i < items.length; i++) {
        var pathc = `${path}${items[i]}`
        console.log(pathc)
        const source = tinify.fromFile(pathc);
        source.toFile(pathc);
    }
});

//tinify.proxy = "" telmo puede colocar un proxy para la peticion

// if (process.argv.length <= 2) {
//     console.log("Usage: " + __filename + " path/to/directory");
//     process.exit(-1);
// } 
// solo si se usara argv