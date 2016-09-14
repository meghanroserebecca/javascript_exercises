const assert = require('assert').equal;
const firstFunction = require('../ex_0').firstFunction;

describe('Exercise 0', () => {
  it('firstFunction: should add an s to passed in string', () => {
    assert(firstFunction('test'), 'tests');
  })
});
