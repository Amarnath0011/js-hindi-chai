const marvelHeroes = ["thor" , "IronMan ", "Spiderman"]
const dcHeroes = ["Superman" , "flash" , "batman"]

//  marvelHeroes.push(dcHeroes);

// console.log(marvelHeroes)//it will push dc array into marvel hero at index last 
// console.log(marvelHeroes[3][1])//method to get first element of dc hero which is at the last index .

/* Difference between push and concat 
 
we can merge two arrays using push and concat , in push we modify the 
existing array 
but in concat we merge two different arrat to return a new array
*/

//const allHeroes = marvelHeroes.concat(dcHeroes)

//console.log(allHeroes)//this will concat both the array 

//Use of spread Operator in array 

const all_newHeroes = [...marvelHeroes,...dcHeroes]// This is a method to concat two arrays 
console.log(all_newHeroes)

const another_array = [1,2 ,3, [4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)//All the element in above array will converse in a single array
console.log(real_another_array)

// change of string into a array


console.log(Array.isArray("Amarnath"))
console.log(Array.from("Amarnath"))
console.log(Array.from({name : "Amarnath"}))//This is interesting and will give a empty array because 
//we have to mention that we want array of key or values 

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3))

//isArray. FromArray ofArray is important learn more about these properties of Arrays
