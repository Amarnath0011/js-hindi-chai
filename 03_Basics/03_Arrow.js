const user = {
    username : "Amarnath",
    price:999,

    welcomeMessage: function(){
        console.log( `${this.username} , welcome to website`)
        console.log(this)// this will give the context of object
    }
}
// user.welcomeMessage()
// user.username = "Mithun"
// user.welcomeMessage()

// console.log(this)//this will give a empty {} (paranthesis)

// function chai(){
//     let username = "Amarnath"
//     console.log(this.username)
// }
// chai()

// const chai = function (){
//     let username = "Amarnath"
//     console.log(this.username)//this will underfined means that we cant use this in function in this way 
// }
// chai()

const chai = () => {
    let username = "Amarnath"
    console.log(this)
}
// chai()


// what is arrow function 

// () => {}//this is a arrow function 

// const addTwo = (num1, num2) => {  //Basic arrow function
//     return num1 + num2
// }

// console.log(addTwo(4,3))

//implicit  return 

// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2) //if we use curly braces we have to write return 
// console.log(addTwo(5,7))

const addTwo = (num1,num2) => ({username : "Amarnath"})
console.log(addTwo())