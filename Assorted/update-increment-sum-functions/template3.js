//** ============================================  update increment function **//
const increment = (function() {
    return function increment (number, value = 1) {
        return number + value;
    };
}) ();

console.log (increment(5,2));  // 7
console.log (increment(5));    // 6

//** ============================================  update sum function**//
const sum = (function() {
    return function sum (...args) {
        return args.reduce((a,b) => a + b, 0);
    };
}) ();

console.log (sum(5,2,7));  // 14
console.log (sum(5,6));    // 11

//** ============================================  assigning object's values to variables **//
var personObj = 
    {
        firstName1 : "John1",
        lastName1  : "Doe1",
        id1        : 5561,
        age1       : 51
    };

    const { firstName1 : first1, id1:idKo } = personObj;

console.log(first1); // John1
console.log(idKo);   // 5561
