//** ============================================ use strict edit in Place **//
const s = [5, 7, 2];
function editInPlace() {
  "use strict";

  // s = [2, 5, 7];
  s[0] = 2;
  s[1] = 5;
  s[2] = 7;

}

editInPlace();
console.log(s);


//** ============================================ function check scope of variables **//
function checkScope() {
  "use strict";
    let i = "function scope";
    if (true) {
      let i = "block scope";
      console.log("Block scope i is: ", i);
    }
    console.log("Function scope i is: ", i);
    return i;
  
  }
  
  checkScope();