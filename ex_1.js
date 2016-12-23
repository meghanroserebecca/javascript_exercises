'use strict';
//Strings!

//Write a function that capitalizes the first string, lower cases the second string and then makes one string out of them
//eg: 'bat', 'slOth' -> 'BATsloth'
//eg: 'my', 'Bud' -> 'MYbud'

function capHalf(firstString, secondString) {
  var capped1 = firstString.toUpperCase();
  var capped2 = secondString.toLowerCase();
  return capped1 + capped2;
}

//Write a function that takes a name and returns only the first initial capitalized with a period after it
//eg: 'mega man' -> 'M.'
//eg: 'sailor moon' -> 'S.'

function mainInitial(name) {
  var initial = name.substr(0, 1);
  var formal = initial.toUpperCase() + '.';
  return formal;
}

//Write a function that reverses a string
//eg: 'sloth' -> 'htols'
//eg: 'bat' -> 'tab'

function reverseString(string) {
  var splitString = string.split('');
  var reverseStringArray = splitString.reverse();
  var reversedString = reverseStringArray.join('');
  return reversedString;
}

//Write a function that capitalizes the first letter of every word
//eg: 'no way that rules' -> 'No Way That Rules'
//eg: 'whatever sloths are the best' ->  'Whatever Sloths Are The Best'

function capitalizeEach(string) {
  var splitString = string.toLowerCase().split(' ');
  for (var i = 0; i < splitString.length; i++) {
    splitString[i] = splitString[i].charAt(0).toUpperCase() + splitString[i].substring(1);
  }
  return splitString.join(' ');
}


exports.capHalf = capHalf;
exports.mainInitial = mainInitial;
exports.reverseString = reverseString;
exports.capitalizeEach = capitalizeEach;
