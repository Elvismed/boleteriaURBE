const {createLogger,format,transports} = require('winston');
const {ip} = require('../routes/authentication')
module.exports = createLogger({
    format : format.combine(
        format.simple()
    ,format.timestamp(),
format.printf(info =>`  [${info.timestamp}]  ${info.level}  ${info.message} `),
format.printf(debug =>`  [${debug.timestamp}]  ${debug.level}  ${debug.message}`)

),
    transports:[
        new transports.File({
            maxsize : 5120000,
            maxFiles : 5,
            filename : `${__dirname}/../logs/log-boleteria.log`
        }),
        new transports.Console({
            level : 'info',
            level: 'debug'
        })
    ]/*,
    transports:[
        new transports.File({
            maxsize : 5120000,
            maxFiles : 5,
            filename : `${__dirname}/../logs/log-debug.log`
        }),
        new transports.Console({
            level : 'debug',
        })
    ]*/
})
