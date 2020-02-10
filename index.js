const lunr = require('lunr');
const corpus = require('./corpus')

var index = lunr(function() {
  this.ref('key');
  this.field('code');
  this.field('names');
  this.field('type');
  this.field('status');
  for(var r of corpus.values())
    this.add({key: r.code, code: r.code.replace(/[\(\)]/g, ' '), names: r.names, type: r.type, status: r.status});
});
function foodins(txt) {
  txt = txt.replace(/(^|\s+)(ins\s*)?(\d\d\d+)\s*([a-z])?\s*(\([ivx]+\))?(\s+?|$)/gi, ' $3$4$5 ').replace(/[\(\)]/g, ' ');
  // console.log(txt);
  var mats = index.search(txt), z = [];
  for(var mat of mats)
    z.push(corpus.get(mat.ref));
  return z;
};
foodins.corpus = corpus;
module.exports = foodins;
// console.log(foodins('z ins 100 (ii)')[0]);
