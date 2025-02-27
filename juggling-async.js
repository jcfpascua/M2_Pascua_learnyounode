let http = require('http');

let urls = process.argv.slice(2);
let results = [];
let count = 0;

function printResult(index, data) {
  results[index] = data;
  count++;

  if (count === 3) {
    results.forEach(result => {
      console.log(result);
    });
  }
}

urls.forEach((url, index) => {
  http.get(url, response => {
    let data = '';

    response.setEncoding('utf8');

    response.on('data', chunk => {
      data += chunk;
    });

    response.on('end', () => {
      printResult(index, data);
    });

    response.on('error', error => {
      console.error('Error:', error);
    });
  });
});
