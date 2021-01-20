 function testEquality (a, b) {
    if (a == b) {
      return "equal";
    } else {
      return "Not Equal";
    }
  
  }
  
  console.log (testEquality(5,"5"));
  
  //** july 28 **//
  function testLogicalAnd (val) {
    if (val <= 25 && val >= 15) {
      return "bagets!!";
    }
      return "not bagets!!";
  }
  console.log(testLogicalAnd(15));
  
  //** july 28 gurang **//
  function testLogicalAnd (val) {
    if (val <= 25 && val >= 15) {
      return "bagets!!";
    } else if (val < 15) {
      return "kid";
    }
      return "gurang";
  }
  console.log(testLogicalAnd(26));