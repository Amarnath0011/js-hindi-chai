

{ } //this is scope of function or program 
let a = 300;
if(true){
    let a = 10
    const b= 20
    // var c = 30
    console.log("INNER : ",a)
}



// console.log(a) //a is not defined in the scope
// console.log(b)
// console.log(c) //it will run in whole global scope
console.log("Global :",a)

function one(){
    const username = "Amarnath"
    function two(){
        const website = "youtube"
    console.log(username);
    }
    // console.log(website)
    two()
}
one()
// in case of nested function child function can access the variable of parent function 

if(true){
    const username = "Amarnath"
    if(username === "Amarnath"){
        const website = " youtube"
        console.log(username.concat(website))
    }
    // console.log(website)//this line will give error because parents cant access child variable
}
// console.log(username)//error as it is out of scope

// ++++++++++++++++++++++++ interesting ++++++++++++++++++++++++++

function addone(num){
    return num+1
}
console.log(addone(5))  //Both are methods to declare a function

const addtwo = function(num){
    return num+2
}

console.log(addtwo(6))

//in case one if we write addone(5) above the declaration of first function it will not give error
//while in second type of function declaration we cant call the function before the declaratioin of fuction
// this type of concept comes under **hoistion (learn later )