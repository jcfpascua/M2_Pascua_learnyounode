let fs = require('fs');

let filePath = process.argv[2];

fs.readFile(filePath, 'utf8', (err, fileContent) => {
    if (err) {
        console.error(err);
        return;
    }
    let newLineCount = fileContent.split('\n').length - 1;
    console.log(newLineCount);
});
