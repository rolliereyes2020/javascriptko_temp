//** ============================================  Constructors: Object literals basic **//
function Person(name) {
  this.name = name;
  this.greeting = function() {
    alert('Hi! I\'m ' + this.name + '.');
  };
}

let person1 = new Person('Bobby');
let person2 = new Person('Janice');

//** ============================================  Constructors: Object literals **//
function Person(first, last, age, gender, interests) {
  this.name = {
     first : first,
     last : last
  };
  this.age = age;
  this.gender = gender;
  this.interests = interests;
  this.bio = function() {
    alert(this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
  };
  this.greeting = function() {
    alert('Hi! I\'m ' + this.name.first + '.');
  };
}

let person1 = new Person('Bob', 'Smith', 32, 'male', ['music', 'skiing']);

// Object() constructor
let person2 = new Object();
person2.name = 'Rollie';
person2['age'] = 53;
person2.greeting = function() {
  alert('Hi! I\'m ' + this.name + '.');
};

// or you can pass Object literal to the Object() constructor parameter:
let person3 = new Object({
  name: 'Jordan',
  age: 12,
  greeting: function() {
    alert('Hi! I\'m ' + this.name + '.');
  }
});

//** ============================================ Create()  **//


//** ============================================  **//


//** ============================================  **//















