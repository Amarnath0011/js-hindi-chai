

function myName(){
    console.log("A")
    console.log("m")
    console.log("a")
    console.log("r")
    console.log("n")
    console.log("a")
    console.log("t")
    console.log("h")
}
// myname //this line will tell the reference of function 
// myName()//this will execute the function 

// function addTwoNumber(){
//     let a=10
//     let b=60

//     let sum= 10+60
//     console.log(sum)
// }
// addTwoNumber()

// function addTwoNumber(number1,number2){
//     console.log(number1 + number2) 
// }
// addTwoNumber()//This will give not a number
// addTwoNumber(6,9) //will give correct sum


// const result = addTwoNumber(4,6)
// console.log(result) // undefined 

 function addTwoNumber(number1,number2){
    let result = number1 + number2
    return result

}
// const result = addTwoNumber(3,6)
// console.log("result: ",result)

// function loginUserMessage (username = "sam"){//default value is sam
//     if(username === undefined){
//         console.log("please enter a user name");
//         return 
//     }
//     return `${username} just logged in`
// }
// console.log(loginUserMessage())

// function loginUserMessage (username){//default value is sam
//     if(username === undefined){
//         console.log("please enter a user name");
//         return 
//     }
//     return `${username} just logged in`
// }
// console.log(loginUserMessage("Amarnath"))

function calculateCartPrice(...num1){// ... is a rest operator it will take multiple parameter in function
    return num1
}
// console.log(calculateCartPrice(200, 400, 500))// output: [200 ,400,500]

const user= {
    username : "hitesh",
    price : 199
}

function handleObject (anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`) 
}
// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

//passing array through a function

const arr = [4,6 ,35,33,4,3]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(arr))

console.log(returnSecondValue([3,5,4,3,7,334]))//we can pass array in this way also 
