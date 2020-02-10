The **International Numbering System for Food Additives** ([INS]) is a [European]-based
naming system for [food additives], aimed at providing a short designation of what may be a
lengthy actual name. It is defined by [Codex Alimentarius], the international food standards
organisation of the [World Health Organisation] (WHO) and [Food and Agriculture Organization]
(FAO) of the [United Nations] (UN). The information is published in the document
*Class Names and the International Numbering System for Food Additives*, first published in
1989, with revisions in 2008 and 2011. The INS is an open list, "subject to the inclusion of
additional additives or removal of existing ones on an ongoing basis".

```javascript
const foodins = require('food-ins');
// foodins.corpus: Map {code => {code, names, type, status}}
// foodins.load(): true (corpus loaded)
// foodins.sql([table], [options]): sql commands
// foodins.csv(): path to csv file
// foodins(<query text>)
// -> [{code, names, type, status}]

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
//   { code: '160d(i)',
//     names: 'lycopene, synthetic',
//     type: 'colour',
//     status: 'a e' },
//   { code: '160d(ii)',
//     names: 'lycopene, tomato',
//     type: 'colour',
//     status: 'a e' },
//   { code: '160a(iii)',
//     names: 'beta-carotene, Blakeslea trispora',
//     type: 'colour',
//     status: 'a e' },
//   { code: '163(iii)',
//     names: 'Blackcurrant extract',
//     type: 'colour',
//     status: 'a e' },
//   { code: '101(iii)',
//     names: 'riboflavin from Bacillus subtilis',
//     type: 'colour (yellow and orange)',
//     status: 'a e' },
//   { code: '172(iii)',
//     names: 'iron oxide, yellow',
//     type: 'colour',
//     status: 'a e' },
//   { code: '150c',
//     names: 'caramel III – ammonia caramel',
//     type: 'colour (brown and black)',
//     status: 'a e' } ]
```
<br>
<br>

[![nodef](https://merferry.glitch.me/card/food-ins.svg)](https://nodef.github.io)

[INS]: https://en.wikipedia.org/wiki/International_Numbering_System_for_Food_Additives
[European]: https://en.wikipedia.org/wiki/Europe
[food additives]: https://en.wikipedia.org/wiki/Food_additive
[Codex Alimentarius]: https://en.wikipedia.org/wiki/Codex_Alimentarius
[World Health Organisation]: https://en.wikipedia.org/wiki/World_Health_Organisation
[Food and Agriculture Organization]: https://en.wikipedia.org/wiki/Food_and_Agriculture_Organization
[United Nations]: https://en.wikipedia.org/wiki/United_Nations
