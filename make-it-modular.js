let mymodule = require('./mymodule.js');

let dir = process.argv[2];
let ext = process.argv[3];

mymodule(dir, ext, (err, data) => {
  if (err) {
    console.log('There was an error:', err);
  } else {
    data.forEach(file => {
      console.log(file);
    });
  }
});