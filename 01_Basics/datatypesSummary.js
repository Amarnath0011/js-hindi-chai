//primitive data type.  
/*
 primitive datatypes are stored directly in stack memory.
 these are immuatable 
 faster as memory is directly stored 
7 types 

1.number
2.string
3.boolean
4.symbol
5.BigInt
6.Null
7.undefined

 Non premitive. or referance type

 Non premitive data types are stored in. heap memory and accesed via reference .
These are mutable datatypes that can be modified after creation.
Slower because use referece of variable to access


 1.objects
 2.functions
 3.Array


 javascript is a dynamically typed language as it is not necessary to 
 give types of data to be stord in a variable , so it is decided
 during runtime so , it is a dynamically typed language .

 same variable can be declared with different type 
 let x=454;
 x="amarnath"
 x=true;
 */
const id = Symbol('123')

const anotherId = Symbol('123')

// console.log(id===anotherId) // both are not equal this is the main function of Symbol datatype

const bigNumber = 34234234235234234n;

// ****************************Non premitive datatype **************************
//arrays
const heroes=["Shaktiman" , "Bheem", "mightyRaju"]
console.log(heroes)

// Objects

let myObj = {
    name: "Amarnath",
    age: 32,
    department: "Department of computer science"
}
console.log(myObj)

//functions
const myFunction = function( ){
console.log("Hello world!!")
}
myFunction()
console.log(typeof heroes)
console.log(typeof myObj)
console.log(typeof myFunction)
console.log(typeof id)


console.log(typeof null)  /*this gives Object , It is one of the historical bug of javascript 
   
                        as In the early days of JavaScript, values were stored in memory with type tags

 The tag for objects was 000, and unfortunately, null was also represented internally as 000.
 The bug was never fixed due to backward compatibility.
 */                       

//  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/* 
                       Memory 
        Stack (Primitive), Heap (Non-Primitive)
*/
 let myFriendName = "Mithun" // this will go to stack 
 let anotherName = myFriendName;
  anotherName = "udit pandat"
 console.log(myFriendName)
 console.log(anotherName)

 let userOne = {
    email : "amarnathkumar9305@gmail.com",
    upi : "6453543@ybl"
 }
 let userTwo = userOne
 userTwo.email="amarnathsigh"

 console.log(userOne.email)
 console.log(userTwo.email)
 console.log(userOne)
 console.log(userTwo)
 /* MY UNDERSTANDING 

    in stack memory when we assign the previous value to another value the 
    only the copy of previous value is assigned to previous value 
    the original value doesnot change like in above example myFriendName is Mithun 
    is copied in another name .and then another name is change d to udit 
    which will not change the original value of myFriendName 


    while in non primitive the values of userOne stored in heap memory 
    in non premitive the actual reference of value is copied.
    like both objects in stack point to same memory in heap so it will 
    change the original value 
    */
