const csv = require('csv');
const fs = require('fs');
const os = require('os');

function read(file, fn) {
  if(!fs.existsSync(file)) return Promise.resolve();
  return new Promise((fres) => {
    var stream = fs.createReadStream(file).pipe(csv.parse({columns: true}));
    stream.on('data', fn);
    stream.on('end', fres);
  });
}

function load() {
  var z = [];
  return read('index.csv', (row) => z.push(row)).then(() => z);
};

load().then((rows) => {
  var z = `const CORPUS = new Map([${os.EOL}`;
  for(var row of rows)
    z += `  ["${row.code}", ${JSON.stringify(row)}],${os.EOL}`;
  z += `]);${os.EOL}`;
  z += `module.exports = CORPUS;${os.EOL}`;
  fs.writeFileSync('corpus.js', z);
});
