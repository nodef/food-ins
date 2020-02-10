const Sql = require('sql-extra');
const lunr = require('lunr');
const path = require('path');

var corpus = new Map();
var index = null;
var ready = false;



function loadCorpus() {
  for(var [k, v] of require('./corpus'))
    corpus.set(k, v);
}

function setupIndex() {
  index = lunr(function() {
    this.ref('key');
    this.field('code');
    this.field('names');
    this.field('type');
    this.field('status');
    for(var r of corpus.values())
      this.add({key: r.code, code: r.code.replace(/[\(\)]/g, ' '), names: r.names, type: r.type, status: r.status.replace(/(\w)/g, 'status_$1')});
  });
}

function csv() {
  return path.join(__dirname, 'index.csv');
}

function sql(tab='food_ins', opt={}) {
  return Sql.setupTable(tab, {code: 'TEXT', names: 'TEXT', type: 'TEXT', status: 'TEXT'}, require('./corpus').values(),
    Object.assign({pk: 'code', index: true, tsvector: {code: 'A', names: 'B', type: 'C', status: 'C'}}, opt));
}

function load() {
  if(ready) return true;
  loadCorpus(); setupIndex();
  return ready = true;
}

function foodins(txt) {
  load();
  txt = txt.replace(/(^|\s+)(ins\s*)?(\d\d\d+)\s*([a-z])?\s*(\([ivx]+\))?(\s+?|$)/gi, ' $3$4$5 ').replace(/[\(\)]/g, ' ');
  var mats = index.search(txt), z = [];
  for(var mat of mats)
    z.push(corpus.get(mat.ref));
  return z;
}
foodins.csv = csv;
foodins.sql = sql;
foodins.load = load;
foodins.corpus = corpus;
module.exports = foodins;
