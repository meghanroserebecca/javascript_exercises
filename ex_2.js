'use strict';
//Arrays!

//Write a function that adds all the numbers in a given array and
//returns the total
//eg: [1, 2, 3] -> 6
//[3, 4, 1] -> 8
function addNumbers(array) {
  var sumTotal = 0;
  for (var i in array) {
    sumTotal += array[i];
  }
  return sumTotal;
};

//Write a function that tells you whether an array contains a given
//string
//eg: ['sloth', 'slug', 'salmon'], 'sloth' -> true
//    ['slugs are better whatever'], 'sloth' -> true

function hasItem(array, match) {
  for (var i = 0; i < array.length; i++) {
    if (match === array[i]) {
      return true;
    }
  }
  return false;
};

//Write a function that tells you the highest value in a given array
//eg [2, 5, 9] -> 9
// [6, 4, 6] -> 6
function highestNumber(array) {
  var arrayHighToLow = array.sort(function(a, b){
    return b - a;
  });
  return arrayHighToLow[0];
}; //Fun one: return Math.max.apply(null, array)

//Write a function that adds an s to the end of each string in an array

//eg: ['sloth', 'slug', 'bat'] -> ['sloths', 'slugs', 'bats']
//eg: ['snakes', 'baby'] -> ['snakess', 'babys']
function pluralize(array) {
  var arrayPlural = array.map(function(a) {
    return a + 's';
  });
  return arrayPlural;
};

exports.addNumbers = addNumbers;
exports.hasItem = hasItem;
exports.highestNumber = highestNumber;
exports.pluralize = pluralize;
