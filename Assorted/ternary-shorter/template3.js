// condition ? statement-if-true : statement-if-false;
// condition ? statement-if-true : statement-if-false;

function checkEqual(a, b) {
  return a === b ? console.log("true eh") : console.log("false eh"); // or simply: return === b;
}
checkEqual(1,1);

/** long version of the above
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

**/


//** ============================================ Ternary with else **//
// condition ? statement-if-true : statement-if-false;
function checkSign(numko) {
  return numko > 0 ? "positive" : numko < 0 ? "negative": "zero"
}
console.log(checkSign(0));  // zero