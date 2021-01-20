var myObj = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh"
  };
  
  function checkObj(checkProp) {
    if (myObj.hasOwnProperty(checkProp)) {
      return myObj[checkProp];
    } else {
      return "not found ah"
    }
  
  }
  
  console.log(checkObj("pet"));