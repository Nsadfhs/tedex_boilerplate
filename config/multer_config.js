const multer = require('multer');
const path = require('path');
const fs = require('fs');

module.exports = {
    config: function () {
        const storage = multer.diskStorage({
            destination: (req, file, cb) => {
                console.log("__require files__", req.files);
                let mimeTypes = file.mimetype;
                let type = mimeTypes.split('/')[0];
                cb(null, `./public/uploads/${type}`);
            },
            filename: (req, file, cb) => {
                cb(null, Date.now() + file.originalname);
            }
        });

        const fileFilter = function (req, file, cb) {
            cb(null, true);
        };

        const upload = multer({
            storage: storage,
            fileFilter: fileFilter
        });
        return upload;
    }
}