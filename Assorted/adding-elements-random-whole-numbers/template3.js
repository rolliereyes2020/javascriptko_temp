let myArray = ['Manchester', 'London', 'Liverpool', 'Birmingham'];
let connect = myArray.push('Bradford', 'Brighton', 'Ando'); 
console.log(myArray);  //** ["Manchester", "London", "Liverpool", "Birmingham", "Bradford", "Brighton"]
console.log((connect)+2); //** 6
console.log(connect);


//** ============================================ random whole Number Between 0 and 19 **// 
var randomNumberBetween0and19 = Math.floor(Math.random() * 5);
console.log(randomNumberBetween0and19);