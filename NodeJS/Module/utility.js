const fs = require('fs');

exports.readFile = function (file) {
    return new Promise(function (resolve, reject) {
        fs.readFile(file, 'utf8', function (err, data) {
            if (err)
                reject(err);
            else
                resolve(data);
        });
    });
}