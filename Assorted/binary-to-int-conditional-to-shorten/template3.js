function convertToInteger(str) {
  return parseInt(str, 2);
}
console.log(convertToInteger("10011"));  // 19

let result = (convertToInteger("10011"));
console.log(typeof result);  // number



//** ============================================ conditionals how to shorten **//
function checkEqual(a, b) {
  if (a === b) {
    return true;
    console.log("it is true Equal");
  }
  else {
    return false;
    console.log("it is not true! unEqual");
  }
}

checkEqual(1,2);