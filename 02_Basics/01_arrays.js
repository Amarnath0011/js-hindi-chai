//
 
const myArray = [0,3,6,4,3,2]

// console.log(myArray[0]);
// console.log(myArray)

const myHeroes = ["shaktiman" , "naagraaj"]

const myArray2 = new Array(0,4,3,3,6)

// console.log(myHeroes)
// console.log(myArray2)


// ArrayMethods

myArray.push(6)
myArray.push(7)
// console.log(myArray)
myArray.pop()
// console.log(myArray)


// myArray.unshift(9)//it will place 9 in front of the array
myArray.shift() // it will remove the 9 from the front 

// console.log(myArray)

// console.log(myArray.includes(9))//boolean 
// console.log(myArray.indexOf(19))
// console.log(myArray.indexOf(6))

const newArr = myArray.join() //This changes the array in Strings 

// console.log(newArr) //type of this newArr is String 
// console.log(myArray)

//Slice , Splice 

console.log("A ",myArray)
const myn1 = myArray.slice(2,4) // it shows the array between index 2 and 4 i.e the element of index [2][3]  not including [4]

console.log(myn1)
console.log("B " , myArray)

const myn2 = myArray.splice(2,4)// in this case four element is deleted from the original array from index 2 to 5
   // myn2 contains the deleted array from myArray
console.log(myn2)
console.log("c ",myArray)
