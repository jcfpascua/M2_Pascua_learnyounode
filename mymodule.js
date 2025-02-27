let fs = require('fs');
let path = require('path');

module.exports = function (dir, ext, callback) {
  fs.readdir(dir, (err, files) => {
    if (err) {
      return callback(err);
    }

    let filteredFiles = files.filter(file => path.extname(file) === '.' + ext);
    callback(null, filteredFiles);
  });
};