const score = 400
// console.log(score)

const balance = new Number(100)
// console.log(balance)



//  console.log(score.toFixed(4))//400.0000
// console.log(score.toString().length)//3
// console.log(score.toFixed(1))//400.0

const othernumber = 23.8966

// console.log(othernumber.toPrecision(3))//23.9
// console.log(othernumber.toPrecision(4))//23.90
// console.log(othernumber.toPrecision(2))//24


const hundered = 1000000
console.log(hundered.toLocaleString('en-IN'))

// ++++++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++++

console.log(Math)
let x=[4,7,9,6,4]

console.log(Math.abs(-5)) //5
console.log(Math.floor(454.453))//454
console.log(Math.round(4.3))//4
console.log(Math.round(5.3434))//5
console.log(Math.ceil(4.3))//5
console.log(Math.floor(4.5))//4
console.log(Math.ceil(4.5))//5
console.log(Math.sqrt(25))//5
console.log(Math.max(4 ,6 ,4,2))//6


console.log(Math.random())//always lies between 0 and 1
console.log(Math.floor((Math.random()*10) +1))//lies between 1 and 9

const min=10
const max=20

console.log(Math.floor(Math.random()*(max-min +1))+min) // will give a random number between 10 and 20
    
    
