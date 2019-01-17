# vue-lodash-filters

[![npm](https://img.shields.io/npm/dm/vue-lodash-filters.svg?style=flat-square)](https://www.npmjs.com/package/vue-lodash-filters)
[![npm](https://img.shields.io/github/package-json/v/carsaver/vue-lodash-filters.svg?style=flat-square)](https://github.com/carsaver/vue-lodash-filters/releases)
[![npm](https://img.shields.io/github/license/carsaver/vue-lodash-filters.svg?style=flat-square)](https://github.com/carsaver/vue-lodash-filters/blob/master/LICENSE)
[![jsdelivr](https://data.jsdelivr.com/v1/package/npm/vue-lodash-filters/badge)](https://www.jsdelivr.com/package/npm/vue-lodash-filters)
[![travisci](https://img.shields.io/travis/com/CarSaver/vue-lodash-filters.svg?style=flat-square)](https://travis-ci.com/CarSaver/vue-lodash-filters)

[Lodash](https://www.lodash.com) functions available as Vue.js 2.x filters

## Getting Started

### Installing

Install with npm:

```bash
npm install --save vue-lodash-filters
```

import into project:

```js
import Vue from 'vue';
import VueLodashFilters from 'vue-lodash-filters';

Vue.use(VueLodashFilters);
```

## Usage

To use the lodash capatilize function

```
<div>{{ someLowerCaseString | capitalize }}</div>
```

## Available Lodash functions

- [_.capitalize](https://lodash.com/docs/4.17.11#capitalize)
- [_.upperFirst](https://lodash.com/docs/4.17.11#upperFirst)
- [_.startCase](https://lodash.com/docs/4.17.11#startCase)

## Authors

- **John Kelly** - [postalservice14](https://github.com/postalservice14)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
