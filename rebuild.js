const corpus = require('./corpus');
const fs = require('fs');
const os = require('os');


function main() {
  var a = 'code,names,type,status'+os.EOL;
  for(var {code, names, type, status} of corpus.values())
    a += `${code},"${names}","${type}",${status}`+os.EOL;
  fs.writeFileSync('index2.csv', a);
}
main();
