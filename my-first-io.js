const fs = require('fs');

const filePath = process.argv[2];
const fileContent = fs.readFileSync(filePath, 'utf8');
const newLineCount = fileContent.split('\n').length - 1;
console.log(newLineCount);
