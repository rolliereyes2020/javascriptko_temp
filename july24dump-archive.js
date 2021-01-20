//** function STARTING HERE **/
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
  
  //** array **/
  var myArray = [14,6,54];
  var array1 = myArray[0];
  var array2 = myArray[1];
  var array3 = myArray[2];
  
  if (array1 >= array2 || array1 >= array3){
      console.log ("array 1 is greatest");
  } else {
      console.log ("array 2 is greatest");
  }
  
  //** array **/
  var myArray = [[1,2,3],[4,5,6,7],[8,9,10,11],[[12,13],14,15]];
  var myData1 = myArray[0];
  var myData2 = myArray[1];
  var myData3 = myArray[2];
  var myData4 = myArray[3];
  var myData5 = myArray[4];
  
  console.log(myData1);
  console.log(myData2);
  console.log(myData3);
  console.log(myData4);
  console.log(myData5);
  
  //** exercises **/
  console.log("another line: July 25, 2020");
  function ourReuse () {
      console.log("heya world");
  }
  ourReuse(50);
  
  //  Example
   function ourReusableFunction(aa, bb) {
      console.log(aa+bb);
  }
  ourReusableFunction(50,40);
  // Only change code below this line adsasdf
  
  
  var myGlobal = 10;
  function fun1() {
      oopsGlobal = 5;
      // assign
  }
  function fun2() {
      var output = "";
      if (typeof myGlobal != "undefined") {
          output += "myGlobal: " + myGlobal;
      }
      if (typeof oopsGlobal != "undefined") {
          output += "oopsGlobal: " + oopsGlobal;
      }
      console.log(output);
  }
  fun1();
  fun2();
  
  
  
  function myLocalScope () {
    var myVar = 51;
    console.log (myVar);
  }
  
  myLocalScope();
  console.log(myVar);
  
  //** array PUSH and SHIFTTTTTTTT **/
  
  function nextInline (arr, numko) {
      arr.push(numko);
      return arr.shift();
  }
  
  var testArr = [1,2,3,4,5];
  
  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInline(testArr, 6));
  console.log("After: " + JSON.stringify(testArr));
  
  //** array etc **/
  
  function testEval (val) {
    if (val === 7){
      console.log ("equal eh");
    } else {
      console.log ("not equal eh")
    }
  }
  
  testEval(7);
  
  //** exercises **/
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
  
  //** july 28 CASE **//
  var val = 0;
  function testSwitch(val) {
  
    switch(val) {
    case 1:
      val = 111;
      break;
    case 2:
      val = 222;
      break;
    case 3:
      val = 333;
      break;
  }
    return val;
  }
  console.log(testSwitch(2));
  
  
  
  //** july 29 REACT **//
  let my_element = document.createElement('h2');
  let my_span = document.createElement('span');
  
  my_span.innerText = "you moheremo12555 time is 2:12";
  
  my_element.appendChild(my_span);
  document.body.appendChild(my_element);
  
  //** july 29 REACT with time **//
  let my_element = document.createElement('h2');
  let my_span = document.createElement('span');
  
  my_span.innerText = "you moheremo12555 time is 2:12";
  
  my_element.appendChild(my_span);
  document.body.appendChild(my_element);
  document.getElementById('demo').innerHTML=Date();
  
  //** aug 1 **//
  function testLess (a, b) {
    if (a < b) {
      return true;
    } else {
      return false;
    }
  }
  
  console.log(testLess(100,15));
  
  //** aug 1 **//
  let name = 'Bingo';
  console.log(name);
  let hello = ' says hello!';
  console.log(hello);
  let greeting = name + hello;
  console.log(greeting);
  console.log(name += hello);
  
  //** aug 1 **//
  function looper1() {
  for (let i = 1; i < 12 ; i++) {console.log(i)}
  }
  
  console.log(looper1());
  
  <<<<<<< HEAD
  //** aug 4 value but no variable **//
  let name = prompt('What is your name?');
  
  if (name === 'Adam') {
    alert('Hello Adam, nice to see you!');
  } else if (name === 'Alan') {
    alert('Hello Alan, nice to see you!');
  } else if (name === 'Bella') {
    alert('Hello Bella, nice to see you!');
  } else if (name === 'Bianca') {
    alert('Hello Bianca, nice to see you!');
  } else if (name === 'Chris') {
    alert('Hello Chris, nice to see you!');
  } else {
    alert ('Nothing dude!!!');
  }
  
  //** aug 4 value but no variable but on 5th line they have now **//
  let myName;
  let myAge;
  console.log(myName);
  console.log(myAge);
  myName = "ando";
  myAge = 53;
  console.log(myName);
  console.log(myAge);
  
  //** aug 4 math undefined **//
  function abTest(a, b) {
    if (a > 0 || b > 0) {
      return undefined;
    } else {
      console.log("not undefined");
    }
  
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
  }
  console.log(abTest(20,35));
  
  //** aug 4 not strictly equal **//
  let iceCreamCost = "7";
  if(iceCreamCost === 7) {
    alert('Yay, I love chocolate ice cream!');
    console.log("Yay, I love chocolate ice cream!");    
  } else {
    alert('Awwww, but chocolate is my favorite...');
    console.log("Awwww, not strictly equal...");    
  }
  
  //** aug 3 **//
  function abTest (a, b) {
    if (a < 0 || b < 0){
      return undefined;
    }
  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
  }
  
  console.log(abTest (100,100));
  
  //** aug 3 object**//
  var myDog = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["ando"]
  
  };
  console.log(myDog);
  myDog.name = "Happy Puppee"
  console.log(myDog);
  
  //** aug 3 check object property **//
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
  
  //** aug find property value of an Object **//
  var myStorage = {
    "car": {
        "inside": {
          "glove box": "maps",
          "passenger seat": "crumbs"
        },
        "ouside": {
          "trunk": "jack"
        }
    }
  }
  
  var gloveboxContents = myStorage.car.inside["glove box"];
  
  console.log(gloveboxContents);
  
  
  //** aug 3 alert prompt **//
  const para = document.querySelector('p');
  
  para.addEventListener('click', updateName);
  
  function updateName() {
    let name = prompt('Enter a new name eh:');
    para.textContent = 'Player 1: ' + name;
  }
  
  //** aug 3 you clicked the button loop **//
  document.addEventListener("DOMContentLoaded", function() {
      function createParagraph() {
        let para = document.createElement('p');
        para.textContent = 'You clicked the button!';
        document.body.appendChild(para);
      }
    
      const buttons = document.querySelectorAll('button');
    
      for(let i = 0; i < buttons.length ; i++) {
        buttons[i].addEventListener('click', createParagraph);
      }
    });
  >>>>>>> 36ae8792ec0d5dba671e6ca8e1c2b46e87ae5468
  
  
  //** aug 4 query Selector of image or img src on click or on double click **//
  let myImage = document.querySelector('img');
  
  myImage.onclick = function() {
      let mySrc = myImage.getAttribute('src');
      if(mySrc === 'images/firefox-icon.png') {
        myImage.setAttribute('src','images/firefox2.png');
      } else {
        myImage.setAttribute('src','images/firefox-icon.png');
      }
  }
  
  myImage.ondblclick = function() {
      let mySrc = myImage.getAttribute('src');
      if(mySrc === 'images/firefox-icon.png') {
        myImage.setAttribute('src','images/firefox3.png');
      } else {
        myImage.setAttribute('src','images/firefox-icon.png');
      }
  
  }
  
  //** aug 4 query Selector, button, local storage, session storage **//
  let myImage = document.querySelector('img');
  
  myImage.onclick = function() {
      let mySrc = myImage.getAttribute('src');
      if(mySrc === 'images/firefox-icon.png') {
        myImage.setAttribute('src','images/firefox2.png');
      } else {
        myImage.setAttribute('src','images/firefox-icon.png');
      }
  }
  
  let myButton = document.querySelector('button');
  let myHeading = document.querySelector('h1');
  
  function setUserName() {
      let myName = prompt('Please enter your name.');
      localStorage.setItem('name', myName);
      myHeading.textContent = 'Mozilla is cool, ' + myName;
    }
  
    if(!localStorage.getItem('name')) {
      setUserName();
    } else {
      let storedName = localStorage.getItem('name');
      myHeading.textContent = 'Mozilla is cool, ' + storedName;
    }
  
    myButton.onclick = function() {
      setUserName();
    }
  
  //** aug 4 access an object **//
  let dog = {
      name: 'spot',
      breed: 'Dalmation'
  
  };
  
  dog.name;
  console.log(dog.name);
  
  //** aug 4 string and number - be careful **//
  let myNumber = '500';
  typeof myNumber;
  console.log(myNumber + 1);
  
  myNumber = 500;
  typeof myNumber;
  console.log(myNumber + 1);
  
  
  //** aug 4 random number between 1 and 100 **//
  let myNumber = Math.floor(Math.random()*100) + 1;
  console.log(myNumber);
  
  //** aug 5 Boolean **//
  let test = 6 < 30;
  if (test) {
      console.log("ok tama");
  } else {
      console.log("mali");
  }
  
  //** aug 5 objects **//
  let dog = { name : 'Spot', breed : 'Dalmatian' };
  dog.name;
  console.log(dog.name);
  console.log(dog.breed);
  
  //** aug 5 querySelector create paragraph; html should have: <section class="blah"></section>**//
  let myName ="Rolando";
  let myAge = "53";
  
  const section = document.querySelector('section');
  let para1 = document.createElement('p');
  para1.textContent = myName;
  let para2 = document.createElement('p');
  para2.textContent = myAge;
  section.appendChild(para1);
  section.appendChild(para2);
  
  //** aug 5 another querySelector section and paragraph thingy **//
  const myName = 'Chris';
  let myAge = 42;
  const section = document.querySelector('section');
  // Don't edit the code below here!
  
  section.innerHTML = ' ';
  let para1 = document.createElement('p');
  let para2 = document.createElement('p');
  para1.textContent = myName;
  para2.textContent = `In 20 years, I will be ${myAge + 20}`;
  section.appendChild(para1);
  section.appendChild(para2);
  
  //** aug 5 Two decimal places **//
  let lotsOfDecimal = 1.766584958675746364;
  lotsOfDecimal;
  let twoDecimalPlaces = lotsOfDecimal.toFixed(2);
  console.log(twoDecimalPlaces);
  
  //** aug 5 Converting to number data types **//
  let myNumber = '74';
  myNumber + 3;
  typeof myNumber;
  Number(myNumber) + 3;
  console.log(Number(myNumber)+3);
  
  //** aug 5 arithmetic operators **//
  10 + 7
  9 * 8
  60 % 3
  5 ** 2
  8 % 3
  12 / 3
  
  //** aug 5 Operator precedence:Multiply and divide are always done first, then add and subtract **//
  let num1 = 10;
  let num2 = 50;
  
  num2 + num1 / 8 + 2;
  (num2 + num1) / (8 + 2);
  
  //** aug 5 assignment operator **//
  let x = 3; // x contains the value 3
  let y = 4; // y contains the value 4
  x *= y; // x now contains the value 12 ; it is also x = x * y
  
  console.log(x);
  
  //** aug 5 Canvas API **//
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  
  ctx.fillStyle = 'green';
  ctx.fillRect(10, 10, 150, 100);
  
  
  //** aug 5 Boolean; html should have: <button>Start machine</button><p>The machine is stopped.</p> **//
  const btn = document.querySelector('button');
  const txt = document.querySelector('p');
  
  btn.addEventListener('click', updateBtn);
  
  function updateBtn() {
    if (btn.textContent === 'Start machine') {
      btn.textContent = 'Stop machine';
      txt.textContent = 'The machine has started!';
    } else {
      btn.textContent = 'Start machine';
      txt.textContent = 'The machine is stopped.';
    }
  }
  
  ==========================================================================================================
  STRINGS 
  
  //** aug 6 Prompt and alert*//
  const buttonko = document.querySelector('button');
  buttonko.onclick = function() {
    let name = prompt('What is your name?');
    alert('Hello ' + name + ', nice to see you!');
  }
  
  
  //** aug 6 force string to become Number **//
  let myString = '123';
  let myNum = Number(myString);
  typeof myNum;
  
  //** aug 6 force number to become string **//
  let myNum = 123;
  let myString = myNum.toString();
  typeof myString;
  
  //** aug 6 **//
  //** string, substring */
  let browserType = 'mozilla';
  browserType.length;
  
  //** substring answer: m */
  browserType[0];
  
  //** substring answer: a */
  browserType[browserType.length-1];
  
  //** substring answer: 2 */
  browserType.indexOf('zilla');
  
  //** substring answer: -1 which means NOT FOUND/
  browserType.indexOf('vanilla');
  
  //** substring answer: moz */
  browserType.slice(0,3);
  
  //** substring answer: zilla 2*/
  browserType.slice(2);
  
  //** substring answer: my name is mud */
  let radData = 'My NaMe Is MuD';
  radData.toLowerCase();
  radData.toUpperCase();
  
  //** substring answer: vanilla */
  browserType.replace('moz','van');
  
  //** aug 6 String template or string literal is way better that traditional way. Backtick is used. **//
  let song = 'Fight the Youth';
  song = `Fight the Youth`;
  
  let score = 9;
  let highestScore = 10;
  let output = 'I like the song "' + song + '". I gave it a score of ' + (score/highestScore * 100) + '%.';
  console.log(output);
  
  output = `I like the song "${ song }". I gave it a score of ${ score/highestScore * 100 }%.`;
  console.log(output);
  
  //** aug 6 String template or string literal exam score, percentage result **//
  //** note: output is: You scored 80/100 (80%). Well done, you passed! */
  let examScore = 80;
  let examHighestScore = 100;
  examReport = `You scored ${ examScore }/${ examHighestScore } (${ Math.round((examScore/examHighestScore*100)) }%). ${ examScore >= 49 ? 'Well done, you passed!' : 'Bad luck, you didn\'t pass this time.' }`;
  console.log(examReport);
  
  //** aug 6 strings as objects; substrings etc. **//
  let stringKo = 'Mozilla.org';
  console.log(stringKo[stringKo.length-1]);
  
  stringKo.indexOf('zilla');
  stringKo.indexOf('vanilla');
  
  if(stringKo.indexOf('Mozilla') !== -1) {
      console.log("Yay all is mozilla!");
    }
  
    stringKo.slice(0,3);
    stringKo.slice(2);
  
  //** aug 6 updating/replacing parts of string **//
  let browserType = 'mozilla';
  browserType.length;
  browserType = browserType.replace('moz','van');
  
  
  //** aug 6 Filtering greeting messages **//
  /* html: <div class="output" style="min-height: 125px;">
        <h2>Live output</h2>
        <ul>
          <li>Happy Birthday!</li>
          <li>Merry Christmas my love</li>
          <li>A happy Christmas to all the family</li>
          <li>You're all I want for Christmas</li>
          <li>Get well soon</li></ul>
        </div>
   */
  const list = document.querySelector('.output ul');
  list.innerHTML = '';
  let greetings = ['Happy Birthday!',
                   'Merry Christmas my love',
                   'A happy Christmas to all the family',
                   'You\'re all I want for Christmas',
                   'Get well soon'];
  
  for (let i = 0; i < greetings.length; i++) {
    let input = greetings[i];
    if (greetings[i].indexOf('Christmas') !== -1) {
      let result = input;
      let listItem = document.createElement('li');
      listItem.textContent = result;
      list.appendChild(listItem);
    }
  }
  
  //** aug 6 capitalize city names  **//
  /* html: <div class="output" style="min-height: 125px;">
  <ul><li>lonDon</li><li>ManCHESTer</li><li>BiRmiNGHAM</li><li>liVERpoOL</li></ul></div> */
  const list = document.querySelector('.output ul');
  list.innerHTML = '';
  let cities = ['lonDon', 'ManCHESTer', 'BiRmiNGHAM', 'liVERpoOL'];
  
  for (let i = 0; i < cities.length; i++) {
    let input = cities[i];
    let lower = input.toLowerCase();
    let firstLetter = lower.slice(0,1);
    let capitalized = lower.replace(firstLetter,firstLetter.toUpperCase());
    let result = capitalized;
    let listItem = document.createElement('li');
    listItem.textContent = result;
    list.appendChild(listItem);
  
  }
  
  ==========================================================================================================
  ARRAY 
  
  //** aug 7 **//
  let shopping = ['bread', 'milk', 'cheese', 'hummus', 'noodles'];
  shopping;
  
  let sequence = [1, 1, 2, 3, 5, 8, 13];
  let random = ['tree', 795, [0, 1, 2]];
  
  random[2][2];
  
  //** aug 7 array in a loop **//
  let sequence = [1, 1, 2, 3, 5, 8, 13];
  for (let i = 0; i < sequence.length; i++) {
    console.log(sequence[i]);
  }
  
  //** aug 7 **//
  let myData = 'Manchester,London,Liverpool,Birmingham,Leeds,Carlisle';
  
  let myArray = myData.split('-');
  let myArray = myData.split(',');
  myArray;
  
  let myNewString = myArray.join(',');
  myNewString;
  
  let dogNames = ['Rocket','Flash','Bella','Slugger'];
  dogNames.toString(); // Rocket,Flash,Bella,Slugger
  
  myArray.push('Cardiff');
  myArray;
  myArray.push('Bradford', 'Brighton');
  myArray;
  
  myArray.pop();
  
  myArray.unshift('Edinburgh');
  myArray;
  myArray.shift('Edinburgh');
  myArray;
  
  //** aug 8 end resuming to another file **//