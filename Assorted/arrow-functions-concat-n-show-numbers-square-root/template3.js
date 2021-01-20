//** ============================================ arrow function showing numbers in an Array **//
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

const squareList = (arr) => {
    const squaredIntegers = arr;
    return squaredIntegers;
};

const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers); // [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]

//** ============================================ arrow function showing numbers (square root) in an Array **//
const realNumberArray2 = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

const squareList2 = (arr) => {
    const squaredIntegers2 = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
    return squaredIntegers2;
};

const squaredIntegers2 = squareList2(realNumberArray2);
console.log(squaredIntegers2); // [16,1764,36] final result

//** ============================================ arrow function showing numbers in an Array **//
// LONG VERSION
let realNumberArray3 = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

for (i = 0; i < realNumberArray3.length; i++) {
    let arrayKo = realNumberArray3[i];
    console.log("content here:");
    console.log(arrayKo);  // [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]
}
//** ============================================ arrow function showing numbers in an Array - short version **//
/** arrow function
let realNumberArray2 = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
realNumberArray2.forEach(i => arrayKo = realNumberArray2[i]);
console.log(realNumberArray2);   // [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]
**/












