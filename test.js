'use strict';
const assert = require('assert');
assert.ok(require('os').EOL === require('./eol').EOL);