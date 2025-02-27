let fs = require('fs');
let path = require('path');

let dirPath = process.argv[2];
let extFilter = '.' + process.argv[3];

fs.readdir(dirPath, (err, files) => {
    if (err) {
        console.error(err);
        return;
    }
    files.filter(file => path.extname(file) === extFilter)
         .forEach(file => console.log(file));
});
