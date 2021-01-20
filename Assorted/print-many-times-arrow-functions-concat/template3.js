//** ============================================ Print many times **//
function printManyTimes(str) {
  "use strict";

  var sentence = str + " is amazing!";

  for(var i = 0; i < str.length; i+=2) {
    console.log(sentence);
  }

}
printManyTimes("freeCodeCamp");


//** ============================================ Arrow functions **//
// same as:
// var magic = () => Date();
var magic = function() {
  return new Date();
}
console.log(magic()); // Thu Aug 13 2020 21:44:54 GMT-0700 (Pacific Daylight Time)

//** ============================================ Arrow functions concat array contents **//
// same as:
// var myConcat = (arr1, arr2) => arr1.concat(arr2);
var myConcat = function(arr1, arr2) {
  return arr1.concat(arr2);
}

console.log(myConcat([1,2],[3,4,5])); // (5) [1, 2, 3, 4, 5]
