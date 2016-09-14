'use strict';

const assert = require('assert').equal;
const ex1 = require('../ex_1')
const capHalf = ex1.capHalf;
const mainInitial = ex1.mainInitial;
const reverseString = ex1.reverseString;
const capitalizeEach = ex1.capitalizeEach;

describe('Exercise 1: Strings', () => {
  it('capHalf: should capitalize the first half of a string', () => {
    assert(capHalf('BaT', 'sLoTh'), 'BATsloth');
  });

  it('mainInitial: should capitalize the main initial and add a period', () => {
    assert(mainInitial('whatever who'), 'W.');
  });

  it('reverseString: should reverse a string', () => {
    assert(reverseString('sloth'), 'htols');
  });

  it('capitalizeEach: should capitalize the first letter of each word', () => {
    assert(capitalizeEach('test sentence'), 'Test Sentence');
  });
});
