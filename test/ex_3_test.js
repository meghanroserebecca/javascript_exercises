'use strict';

const assert = require('assert').equal;
const Sloth = require('../ex_3').Sloth;
const SlothRanch = require('../ex_3').SlothRanch;

describe('Exercise 3: Objects', () => {
  describe('Sloth', () => {
    let newSloth;

    beforeEach(() => {
      newSloth = new Sloth('Pat', 'Pine');
    });

    it('Constructor: should make an instance of Sloth', () => {
      assert(newSloth.name, 'Pat');
      assert(newSloth.favoriteTree, 'Pine');
      assert(Array.isArray(newSloth.feedings), true);
      assert(newSloth.totalFed, 0);
    });

    it('feed: should feed this sloth a random number between 0 and 5', () => {
      newSloth.feed();

      assert(newSloth.feedings[0] >= 0, true);
      assert(newSloth.feedings[0] <= 5, true);
      assert(typeof newSloth.feedings[0], 'number');
    });

    it('totalFed: should calculate the total amount in the feedings array', () => {
      newSloth.feedings = [1, 2, 3];
      newSloth.calculateTotalFed();

      assert(newSloth.totalFed, 6);
    });
  });

  describe('Sloth Ranch', () => {
    let newSlothRanch;
    beforeEach(() => {
      newSlothRanch = new SlothRanch();
    });

    it('Constructor: should make a new instance of Sloth Ranch', () => {
      assert(Array.isArray(newSlothRanch.grove), true);
    });

    it('makeBabySloth: should add a new sloth to the grove', () => {
      newSlothRanch.makeBabySloth('Wilson', 'Palm');

      assert(newSlothRanch.grove[0].name, 'Wilson');
      assert(newSlothRanch.grove[0].favoriteTree, 'Palm');
    });

    it('feedSloths: should feed all of the sloths', () => {
      newSlothRanch.makeBabySloth('Baby', 'NotACorner');
      newSlothRanch.makeBabySloth('Fifi', 'Oak');
      newSlothRanch.feedSloths();

      let testSlothOne = newSlothRanch.grove[0];
      let testSlothTwo = newSlothRanch.grove[1];

      assert(testSlothOne.feedings.length > 0, true);
      assert(testSlothTwo.feedings.length > 0, true);
    });

    it('findSloths: should find the sloths for a given tree', () => {
      let fakeSloths = [
        {name: 'one', favoriteTree: 'test'},
        {name: 'two', favoriteTree: 'none'},
        {name: 'three', favoriteTree: 'test'}
      ];

      newSlothRanch.grove = fakeSloths;

      let result = newSlothRanch.findSloths('test');

      assert(result[0], 'one');
      assert(result[1], 'three');
    });

    it('fedPerDay: should calculate the total per hour for all sloths', () => {
      let fakeSloths = [
        {feedings: [1, 2, 3]},
        {feedings: [4, 5, 6]}
      ];
      newSlothRanch.grove = fakeSloths;

      var result = newSlothRanch.fedPerDay();
      assert(result[0], 5);
      assert(result[1], 7);
      assert(result[2], 9);
    });
  });
});
