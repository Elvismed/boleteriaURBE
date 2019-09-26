const multer = require('multer');
const path = require('path');
const uuid = require('uuid/v4');

const storage = multer.diskStorage({
    destination: ('server/public/uploads'),
    filename: (req, file, cb) => {
        cb(null, uuid() + path.extname(file.originalname).toLocaleLowerCase());
    }
})

const upload = multer({
    storage,
    dest: ('server/public/uploads'),
    limits: { fileSize: 2000000 },
    fileFilter: (req, file, cb) => {
        const filetypes = /jpeg|jpg|png|gif/;
        const mimetype = filetypes.test(file.mimetype)
        const extname = filetypes.test(path.extname(file.originalname))
        if (mimetype && extname) {
            console.log(cb)
            return cb(null, true);
        }
        cb("Error: Archivo invalido");

    }
}).single('image');

module.exports = upload;