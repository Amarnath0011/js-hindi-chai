//if

/*if(false){  //code in scope will not run 
   
}
if(true){
             //code in scope will run 
}
const isUserLoggedIn = true
if(isUserLoggedIn){

}
//  < , > , <= , >= , == (comparison), != ,  ===(check datatype as well )
// !==(strictly check ) , 
if(2=="2"){
    console.log("Executed")
} 
if(2==="2"){
    console.log("will not execute ")
}

const temp = 60
if(temp<50){
    console.log("temperature is less than 50")
}
else{
    console.log("temperature is greater than 50")
}*/

// const score = 200

// if(score>100){
//     const power = "fly"
//     console.log(`user can ${power}`)
// }
// console.log(`i can also ${power}`)


//short hand notation of if

// const balance = 1000
// if(balance < 500) console.log("test")

// if(balance < 500){
//     console.log("less than 500 ")
// }
// else if(balance < 750){
//     console.log("less than 750")
// }
// else{
//     console.log("less than 1200")
// }


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true
if(userLoggedIn && debitCard){
    console.log("Allow to buy course")
}
if(loggedInFromEmail || loggedInFromGoogle){
    console.log("User Logged In")
}
