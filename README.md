# babel-plugin-jsx-strip-ext [![Build Status](https://img.shields.io/travis/alanshaw/babel-plugin-jsx-strip-ext/master.svg)](https://travis-ci.org/alanshaw/babel-plugin-jsx-strip-ext) [![Dependency Status](https://david-dm.org/alanshaw/babel-plugin-jsx-strip-ext.svg)](https://david-dm.org/alanshaw/babel-plugin-jsx-strip-ext)

Strip `.jsx` extension from import sources.

## Example

**input.js**
```js
import Foo from './Foo.jsx'
```

**.babelrc**
```json
{
  "presets": ["react", "es2015"],
  "plugins": ["jsx-strip-ext"]
}
```

**output.js**
```js
'use strict';
var _Foo = require('./Foo');
var _Foo2 = _interopRequireDefault(_Foo);
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
```

## Usage

### Via .babelrc (recommended)

```json
{
  "plugins": ["jsx-strip-ext"]
}
```

### Via Node API

```js
require('babel-core').transform('code', {
  plugins: ['jsx-strip-ext']
})
```

---

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)
