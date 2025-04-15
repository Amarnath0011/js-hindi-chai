// // Promise : Promise is a object which either work is pending , completed or not completed
// const promiseOne =new Promise(function(resolve,reject){
//     // Do an async task
//     // DB calls, crytography, network call 
//     setTimeout(function(){
//         console.log("async task is complete")
//         resolve()
//     },1000)
// })

// promiseOne.then(function(){
//     console.log("promise consumed")
// })

// new Promise (function(resolve, reject){
//     setTimeout(function(){
//         console.log("Async Task 2")
//         resolve()
//     },1000)
// }).then(function(){
//     console.log("async 2 resolved")
// })

// const promiseThree = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({username : "Chai",email:"chai@example.com"})
//     },1000)
// })
// promiseThree.then(function(user){
// console.log(user)
// })

// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if(!error){
//             resolve({username: "Amarnath", password : "Amar123#"})
//         }
//         else{
//             reject("ERROR !! 404 NOT FOUND")
//         }
//     },2000)
//   })
//    promiseFour
//     .then((user)=>{
//         console.log(user)
//         return user.username
//     })
//     .then((username)=>{
//         console.log(username)
//     })
//     .catch((error)=>{
//         console.log(error)
//     })
//     .finally(()=>{console.log("Promise is resolved or rejected")})


//     const promiseFive = new Promise(function(resolve, reject){
       
//         setTimeout(function(){
//             let error = true
//             if(!error){
//                 resolve({username: "Javascript", password : "Amar123#"})
//             }
//             else{
//                 reject("ERROR !! JS WENT WRONG ")
//             }
//         },2000)
//     })
//    async function consumePromiseFive(){
//     try{
//         const response =  await promiseFive
//    console.log(response)
//     }catch(error){
//         console.log(error)
//     }
//    }
//    consumePromiseFive()

//    async function getAllUser(){
//     try{
//         const response = await fetch('https://api.github.com/users/Amarnath0011')
//         const data = await response.json()
//         console.log(data);
//     }catch(error){
//         console.log("E : " ,error);
//     }
//    }
//    getAllUser()

fetch("https://api.open-meteo.com/v1/forecast?latitude=22.8046&longitude=86.2029&current_weather=true")
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data)
})
.catch(()=>{console.log(error)})
