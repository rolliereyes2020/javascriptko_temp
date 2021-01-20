let myArray = ['Manchester', 'London', 'Liverpool', 'Birmingham', 'Leeds', 'Carlisle'];
var catNamesArray = ["Jacqueline", "Sophia", "Autumn"];

myArray.push('Cardiff');
myArray.push('Bradford', 'Brighton');

console.log(myArray.concat(catNamesArray));

var hege = ["Cecilie", "Lone"];
var stale = ["Emil", "Tobias", "Linus"];
var kai = ["Robin"];
var children = hege.concat(stale, kai);

console.log(children);