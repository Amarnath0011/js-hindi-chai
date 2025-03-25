// let score = "33abc"
// let score = null
// let score = undefined
let score = true;


// console.log(typeof score);
// console.log(typeof(score));

let valueInNumber = Number(score) //conversion of string into number 

console.log(typeof(valueInNumber))
console.log(valueInNumber) //this will give a NaN ie not a number


//"33" => 33
// "33AAB" -> NaN
// true => 1
//false => 0

// let isLoggedIn = 1;
// let booleanIsLoggedIn= Boolean(isLoggedIn)

// console.log(booleanIsLoggedIn) //true


// let isLoggedIn = 0;
// let booleanIsLoggedIn= Boolean(isLoggedIn)

// console.log(booleanIsLoggedIn) //false

let isLoggedIn = "amarnath";
let booleanIsLoggedIn= Boolean(isLoggedIn) //convert into boolean

// console.log(booleanIsLoggedIn)   //true
// 1 => true;
// 0 => false;

let someNumber= 33;
let stringNumber = String(someNumber) //convert number into string 
console.log(typeof stringNumber)
console.log(stringNumber)