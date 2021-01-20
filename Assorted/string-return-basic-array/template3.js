function wordBlanks (myNoun, myAdjective, myVerb, myAdverb){
    var result = "";
    result += "The " + myAdjective + " " + myNoun + " " + myVerb + " to the store " + myAdverb + ".";
    return result;
  }
  console.log(wordBlanks("dogko", "big", "ran", "quickly"));
  
  //** array **/
  var myArray = [4,6,54,3];
  /** myArray2 = myArray[0] + " una"; **/
  
  if (myArray[0] >= 4) {
  console.log(myArray);
  } else {
  console.log("oh");
  }
  
  var myArray = [14,6,54];
  var array1 = myArray[0];
  var array2 = myArray[1];
  var array3 = myArray[2];
  
  if (array1 >= array2 || array1 >= array3){
      console.log ("array 1 is greatest");
  } else {
      console.log ("array 2 is greatest");
  }
