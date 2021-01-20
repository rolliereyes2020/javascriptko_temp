//** ============================================ Printing out product names, prices (Loop) and total **//
/* html: 
<div class="output" style="min-height: 150px;">
<ul></ul>
<p></p>
</div>
*/
	  
const list = document.querySelector('.output ul');
const totalBox = document.querySelector('.output p');
let total = 0;
list.innerHTML = '';
totalBox.textContent = '';

let products = ['Underpants:6.99',
  'Socks:5.99',
  'T-shirt:14.99',
  'Trousers:31.99',
  'Shoes:23.99'];

for(let i = 0; i < products.length; i++) {
  let subArray = products[i].split(':');
  let name = subArray[0];
  let price = Number(subArray[1]);  //** 6.99 */
  total += price; //** 6.99 then next is 12.98 */
  console.log(total);
  let itemText = name + ' — $' + price;  //** Underpants — $6.99 */
  let listItem = document.createElement('li');
  listItem.textContent = itemText;
  list.appendChild(listItem);
}
totalBox.textContent = 'Total: $' + total.toFixed(2);

//** ============================================ Top 5 searches   **//
const list = document.querySelector('.output ul');
const searchInput = document.querySelector('.output input');
const searchBtn = document.querySelector('.output button');

list.innerHTML = '';

let myHistory= [];

searchBtn.onclick = function() {
 if(searchInput.value !== '') {
 myHistory.unshift(searchInput.value);

 list.innerHTML = '';

 for(let i = 0; i < myHistory.length; i++) {
 itemText = myHistory[i];
 const listItem = document.createElement('li');
 listItem.textContent = itemText;
 list.appendChild(listItem);
 }

 if(myHistory.length >= 5) {
 myHistory.pop();
 }

 searchInput.value = '';
 searchInput.focus();
 }
}

//** ============================================ Display subarray on an HTML List  **//
/* html:
<div class="output"><ul></ul></div>
*/
let list = document.querySelector('.output ul')

var personArr = [
    ["John1", "Doe1", 5561, 51],
    ["John2", "Doe2", 5562, 52],
    ["John3", "Doe3", 5563, 53],
    ["John4", "Doe4", 5564, 54],
    ["John5", "Doe5", 5565, 55]
    ]
    
let subPerson1Name = personArr[0][0];  //* John1
let personArrCount = personArr.length;  //* 5
let person1length = personArr[0].length;  //* 4

let person1 = personArr[0];

for (j = 0; j < person1length; j++) {
    let item1 = person1[j];
    console.log(item1);   //* John1 Doe1 5561 51
    let result = item1;

    let listItem = document.createElement('li');
    listItem.textContent = result;
    list.appendChild(listItem);
}


//** ============================================ Display subarrays on an HTML List  **//
/* html:
<div class="output"><ul></ul></div>
*/
let list = document.querySelector('.output ul')

var personArr = [
    ["John1", "Doe1", 5561, 51],
    ["John2", "Doe2", 5562, 52],
    ["John3", "Doe3", 5563, 53],
    ["John4", "Doe4", 5564, 54],
    ["John5", "Doe5", 5565, 55]
    ]

for (j = 0; j < personArr.length; j++) {
    let item1 = personArr[j];
    console.log(item1);   //* John1 Doe1 5561 51
    let result = item1;

    let listItem = document.createElement('li');
    listItem.textContent = result;
    list.appendChild(listItem);
}

//** ============================================ Find Value from Property of object  **//
var personObj = [
    {
        firstName: "John1",
        lastName : "Doe1",
        id       : 5561,
        age      : 51
    },
    
    {
        firstName: "John2",
        lastName : "Doe2",
        id       : 5562,
        age      : 52
    },
    
    {
        firstName: "John3",
        lastName : "Doe3",
        id       : 5563,
        age      : 53
    },
    
    {
        firstName: "John4",
        lastName : "Doe4",
        id       : 5564,
        age      : 54
    },
    
    {
        firstName: "John5",
        lastName : "Doe5",
        id       : 5565,
        age      : 55
    }
    
    ];

    function lookUpProfile(name, prop){
        for (var i = 0; i < personObj.length; i++) {
            if (personObj[i].firstName === name) {
                return personObj[i][prop] || "no such property";
            }
        }
        return "no such contact";

    }

    var data = lookUpProfile("John3", "lastName");
    console.log(data);   //** Doe3 */

//** ============================================ Mutliply elements on an array **//**//
function multiplyAll(arr) {
    var product = 1;

    for (var i = 0; i < arr.length; i++) {
        let itemsKo = arr[i]; //** just to show the given items to be multiplied */
        console.log(itemsKo); //** just to show the given items to be multiplied */
        product *= arr[i];
    }
    return product;

}

var product = multiplyAll([1,2,3,4]); // ** 24 **//
console.log(product);
//** ============================================ Mutliply elements on an array/subarray **//
function multiplyAll(arr) {
    var product = 1;

    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            product *= arr[i][j];
        }
    }
    return product;

}

var product = multiplyAll([[1,2],[3,4],[5,6,7]]); // ** 5040 **//
console.log(product);

//** ============================================ Grand total on Array values with initial value**//
var ourArr = [9,10,11,12];
var ourTotal = 50;

for (var i = 0; i < ourArr.length; i++) {
    let myNum = ourArr[i];
    console.log("array element value is:");
    console.log(myNum);
    ourTotal = ourTotal + myNum;
    console.log("line here is the Grand total now:");
    console.log(ourTotal);
    console.log('\n');
} 

//** ============================================ Display array contents starting from the highest **//
var ourArray = [];
for (var i = 10; i > 0; i -= 1) {
    ourArray.push(i);
}
console.log(ourArray);  //** 10, 9, 8, 7, 6, 5, 4, 3, 2, 1

//** ============================================ Display even numbers **//
var ourArray = [];
for (var i = 0; i < 10; i += 2) {
    ourArray.push(i);
}
console.log(ourArray);

//** ============================================ Display odd numbers **//
var ourArray = [];
for (var i = 1; i < 10; i += 2) {
    ourArray.push(i);
}
console.log(ourArray);

//** ============================================ While loop **//
var ourArray = [];
var i = 0
while (i < 10) {
    ourArray.push(i);
    i++;
}
console.log(ourArray);


//** ============================================ Merge arrays **//
let myArray = ['Manchester', 'London', 'Liverpool', 'Birmingham', 'Leeds', 'Carlisle'];
var catNamesArray = ["Jacqueline", "Sophia", "Autumn"];

myArray.push('Cardiff');
myArray.push('Bradford', 'Brighton');

console.log(myArray.concat(catNamesArray));

var hege = ["Cecilie", "Lone"];
var stale = ["Emil", "Tobias", "Linus"];
var kai = ["Robin"];
var children = hege.concat(stale, kai);

console.log(children);


//** ============================================ Adding element to an Array **//
let myArray = ['Manchester', 'London', 'Liverpool', 'Birmingham'];
let connect = myArray.push('Bradford', 'Brighton'); 
console.log(myArray);  //** ["Manchester", "London", "Liverpool", "Birmingham", "Bradford", "Brighton"]
console.log(connect); //** 6


//** ============================================ random whole Number Between 0 and 19 **// 
var randomNumberBetween0and19 = Math.floor(Math.random() * 20);
console.log(randomNumberBetween0and19);


//** ============================================ our random range - with given min and max **//
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


//** ============================================ Convert binary to Integer **//
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

======================================= the above is same and shorter: (ternary) **//
// condition ? statement-if-true : statement-if-false;
// condition ? statement-if-true : statement-if-false;

function checkEqual(a, b) {
  return a === b ? console.log("true eh") : console.log("false eh"); // or simply: return === b;
}
checkEqual(1,1);

//** ============================================ Ternary with else **//
// condition ? statement-if-true : statement-if-false;
function checkSign(numko) {
  return numko > 0 ? "positive" : numko < 0 ? "negative": "zero"
}
console.log(checkSign(0));  // zero



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


//** ============================================ Print many times **//
function printManyTimes(str) {
  "use strict";

  var sentence = str + " is amazing!";

  for(var i = 0; i < str.length; i+=2) {
    console.log(sentence);
  }

}
printManyTimes("freeCodeCamp");


//** ============================================ Arrow functions **//
// same as:
// var magic = () => Date();
var magic = function() {
  return new Date();
}
console.log(magic()); // Thu Aug 13 2020 21:44:54 GMT-0700 (Pacific Daylight Time)

//** ============================================ Arrow functions concat array contents **//
// same as:
// var myConcat = (arr1, arr2) => arr1.concat(arr2);
var myConcat = function(arr1, arr2) {
  return arr1.concat(arr2);
}

console.log(myConcat([1,2],[3,4,5])); // (5) [1, 2, 3, 4, 5]


//** ============================================ arrow function showing numbers in an Array **//
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

const squareList = (arr) => {
    const squaredIntegers = arr;
    return squaredIntegers;
};

const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers); // [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]

//** ============================================ arrow function showing numbers (square root) in an Array **//
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

const squareList = (arr) => {
    const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
    return squaredIntegers;
};

const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers); // [16,1764,36] final result

//** ============================================ arrow function showing numbers in an Array **//
// LONG VERSION
let realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

for (i = 0; i < realNumberArray.length; i++) {
    let arrayKo = realNumberArray[i];
    console.log("content here:");
    console.log(arrayKo);  // [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]
}

//** ============================================ arrow function showing numbers in an Array **//
// arrow function
let realNumberArray2 = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
realNumberArray2.forEach(i => arrayKo = realNumberArray2[i]);
console.log(realNumberArray2);   // [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]

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


//** ============================================ Ternary, select, event handler, if-else bgcolor, theme chooser **//
const select = document.querySelector('select');
const html = document.querySelector('html');
document.body.style.padding = '50px';

function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}

select.onchange = function() {
  ( select.value === 'black' ) ? update('black','white') : update('white','black');
}

// ========================** long version of the above */
select.onchange = function() {
    if (select.value === 'black') {
        update('black', 'white');
    }   else {
        update('white', 'black');
    }
}


//** ============================================ countdown from 10 to 0 (High to low) using loop **//
//** html is: <div class="output"></div>
const outputVarKo = document.querySelector('.output');
outputVarKo.innerHTML = '';

let i = 10;

while(i >= 0) {
 let para = document.createElement('p');
 if(i === 10) {
 para.textContent = 'Countdown ' + i;
 } else if(i === 0) {
  para.textContent = 'Blast off!';
 } else {
 para.textContent = i;
 }

 outputVarKo.appendChild(para);

 i--;
}

// ========================** other way, my own, using FOR LOOP for the above */
const outputVarKo = document.querySelector('.output');
outputVarKo.innerHTML = '';

for (i = 10; i >= 0; i--) {
  let para = document.createElement('p');
  console.log(i);
  if (i === 10) {
    para.textContent = "Countdown na " + i;
  } else if (i === 0) {
    para.textContent = "Blast of yay!" + i;
  } else {
  para.textContent = i;
  }

  outputVarKo.appendChild(para);
}


//** ============================================ Filling guest list - do while - refused and admitted **//
//** html: <div class="admitted"></div><div class="refused"></div>
const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

const admitted = document.querySelector('.admitted');
const refused = document.querySelector('.refused');

admitted.textContent = 'Admit: ';
refused.textContent = 'Refuse: '
let i = 0;

do {
 if(people[i] === 'Phil' || people[i] === 'Lola') {
 refused.textContent += people[i] + ', ';
 } else {
 admitted.textContent += people[i] + ', ';
 }
 i++;
} while(i < people.length);

refused.textContent = refused.textContent.slice(0,refused.textContent.length-2) + '.';
admitted.textContent = admitted.textContent.slice(0,admitted.textContent.length-2) + '.';


//** ============================================  Exercise: array on a list **//
//** html: <section class="preview"></section>
let myArray = ['tomatoes', 'chick peas', 'onions', 'rice', 'black beans'];
const tempKo = document.querySelector('section');
    // Add your code here
for (i = 0; i < myArray.length; i++) {
    let arrKo = myArray[i];
    console.log(arrKo);
    let list = document.createElement('li');
    list.textContent = arrKo;
// Don't edit the code below here!
    const section = document.querySelector('section');
    tempKo.appendChild(list);
}


//** ============================================  **//


//** ============================================  **//


//** ============================================  **//


//** ============================================  **//


//** ============================================  **//















