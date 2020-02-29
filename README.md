The **International Numbering System for Food Additives** ([INS]) is a
[European]-based naming system for [food additives]. It is defined by
[Codex Alimentarius], the [WHO], and the [FAO].

*Class Names and the International Numbering System for Food Additives*,
was first published in 1989, with revisions in 2008 and 2011. The INS is
an open list, "subject to the inclusion of additional additives or removal
of existing ones on an ongoing basis".


## console

```bash
foodins "102"
# 102: tartrazine
# .type: colour (yellow and orange) (FDA: FD&C Yellow #5); .status: a e

foodins "ins 102"
# 102: tartrazine
# .type: colour (yellow and orange) (FDA: FD&C Yellow #5); .status: a e

foodins "ins 160 d (iii)"
# 160d(iii): lycopene, Blakeslea trispora
# .type: colour; .status: a e
#
# 160d: lycopenes
# .type: ; .status: a e
# ...
```

### reference 

```bash
foodins [options] <query>
# query: code, name, type, or status of food additive
# Options:
# --help: show this help
# --silent: hide error messages

# Environment variables:
$FOODINS_SILENT # hide error messages (0)
```
<br>


## javascript

```javascript
const foodins = require('food-ins');

foodins('102');
// [ { code: '102',
//     names: 'tartrazine',
//     type: 'colour (yellow and orange) (FDA: FD&C Yellow #5)',
//     status: 'a e' } ]

foodins('ins 102');
// [ { code: '102',
//     names: 'tartrazine',
//     type: 'colour (yellow and orange) (FDA: FD&C Yellow #5)',
//     status: 'a e' } ]

foodins('ins 160 d (iii)');
// [ { code: '160d(iii)',
//     names: 'lycopene, Blakeslea trispora',
//     type: 'colour',
//     status: 'a e' },
//   { code: '160d', names: 'lycopenes', type: '', status: 'a e' },
//   ... ]
```

### reference

| Method              | Action
|---------------------|-------
| [foodins]           | Lists matching food additives.
| [load]              | Preloads food additive data (before use).
| [sql]               | Gives commands to insert data to SQL database.
| [csv]               | Gives path of data CSV file.
| [corpus]            | Keeps food additive data. {field}

<br>
<br>

[![nodef](https://merferry.glitch.me/card/food-ins.svg)](https://nodef.github.io)

[foodins]: https://github.com/nodef/food-ins/wiki
[load]: https://github.com/nodef/food-ins/wiki/load
[sql]: https://github.com/nodef/food-ins/wiki/sql
[csv]: https://github.com/nodef/food-ins/wiki/csv
[corpus]: https://github.com/nodef/food-ins/wiki/corpus
[INS]: https://en.wikipedia.org/wiki/International_Numbering_System_for_Food_Additives
[European]: https://en.wikipedia.org/wiki/Europe
[food additives]: https://en.wikipedia.org/wiki/Food_additive
[Codex Alimentarius]: https://en.wikipedia.org/wiki/Codex_Alimentarius
[WHO]: https://en.wikipedia.org/wiki/World_Health_Organisation
[FAO]: https://en.wikipedia.org/wiki/Food_and_Agriculture_Organization
[UN]: https://en.wikipedia.org/wiki/United_Nations
