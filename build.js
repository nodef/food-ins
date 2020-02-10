const csv = require('csv');
const path = require('path');
const fs = require('fs');
const os = require('os');

function read(file, fn) {
  if(!fs.existsSync(file)) return Promise.resolve();
  return new Promise((fres) => {
    var stream = fs.createReadStream(file).pipe(csv.parse({columns: true}));
    stream.on('data', fn);
    stream.on('end', fres);
  });
};

function convert(row) {
  var code = row['INS'];
  var status = row['Approvals A'].includes('A')? 'a ':'';
  status += row['Approvals E'].includes('E')? 'e ':'';
  status += row['Approvals U'].includes('U')? 'u ':'';
  var names = row['Names'];
  var type = row['Type'];
  status = status.trim();
  return {code, names, type, status};
};

function load() {
  var z = [];
  return read('index.csv', (row) => z.push(convert(row))).then(() => z);
};

load().then((rows) => {
  var z = `const CORPUS = new Map([${os.EOL}`;
  for(var row of rows)
    z += `  ["${row.code}", ${JSON.stringify(row)}],${os.EOL}`;
  z += `]);${os.EOL}`;
  z += `module.exports = CORPUS;${os.EOL}`;
  fs.writeFileSync('corpus.js', z);
});
