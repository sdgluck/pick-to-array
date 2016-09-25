# pick-to-array

> Pick all values of a property in one or more objects

Made with ❤ at [@outlandish](http://www.twitter.com/outlandish)

<a href="http://badge.fury.io/js/pick-to-array"><img alt="npm version" src="https://badge.fury.io/js/pick-to-array.svg"></a>
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

## Install

```sh
npm install --save pick-to-array
```

## Import

```js
// ES6
import pickToArray from 'pick-to-array'

// CommonJS
var pickToArray = require('pick-to-array')

// RequireJS
define(['pick-to-array'], function (pickToArray) {/*...*/})
```

```html
<!-- Script, available as `window.pickToArray` -->
<script src="/node_modules/pick-to-array/index.js"></script>
```

## Usage

### `pickToArray(entities, property[, deep])`

Pick all values of a property in one or more objects.

- __entities__ {Array|Object} Entities or entity to pick from 
- __property__ {String|Array} Property name(s) to pick value from
- [__deep__] {Boolean} Pick from nested properties 

Returns an array of all the values.

Example:

```js
const entities = [{ id: 456 }, { id: 789 }, { entity: { id: 123 } }]

const ids = pickToArray(entities, 'id', true)

console.log(ids) //=> [456, 789, 123]
```

## Contributing

All pull requests and issues welcome!

If you're not sure how, check out Kent C. Dodds'
[great video tutorials on egghead.io](https://egghead.io/lessons/javascript-identifying-how-to-contribute-to-an-open-source-project-on-github)!

## Author & License

`pick-to-array` was created by [Sam Gluck](https://twitter.com/sdgluck) and is released under the MIT license.
