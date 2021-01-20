function ourRandomRange(ourMin, ourMax) {
  return Math.floor(Math.random() * (ourMax - ourMin * 1)) + ourMin;
}
console.log(ourRandomRange(6, 9)); // 6 , 7 , 8



//** ============================================ convert to Integer **//
function convertToInteger(str) {
  return parseInt(str);
}
console.log(convertToInteger("56"));  // 56

let result = (convertToInteger("56"));
console.log(typeof result);  // number