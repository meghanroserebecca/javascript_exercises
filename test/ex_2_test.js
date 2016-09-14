const ex2 = require('../ex_2');
const assert = require('assert').equal;
const addNumbers = ex2.addNumbers;
const hasItem = ex2.hasItem;
const highestNumber = ex2.highestNumber;
const pluralize = ex2.pluralize;

describe('Exercise 2: Arrays', () => {
  it('addNumbers: should add the numbers in an array', () => {
    assert(addNumbers([1, 2, 3]), 6);
  });

  it('hasItem: should find a string in an array', () => {
    assert(hasItem(['bat', 'sloth'], 'sloth'), true);
  });

  it('highestNumber: should find the highest number in an array', () => {
    assert(highestNumber([1, 3, 5, 2, 0]), 5);
  });

  it('pluralize: should add an s to the end of each word', () => {
    assert(pluralize(['thing', 'other'])[0], 'things');
  });
})
