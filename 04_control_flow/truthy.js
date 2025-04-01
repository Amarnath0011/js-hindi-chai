// const userEmail = "ama@.ai"
// if(userEmail){
//     console.log("Got user email")
// }
// else{
//     console.log("Dont have user email")
// }

//falsy value
/*
    false,0,-0,BigInt 0n,"",null,undefined,NaN
    */
   //Truthy value
   /*
   "0" , 'false', true, " ", [ ],{},function(){},
   */

   const userEmail =[]
   if(userEmail.length === 0){
    console.log("Array is emptyy")
   }

   const emptyObj = {}
   if(Object.keys(emptyObj).length === 0 ){
    console.log("Object is empty")
   }

//    false == 0 //true
    //   0 == ""//true

    //Nullish Coalescing Operator (??): null undefined

    let val1 ;
    // val1 = 10??1
    // val1 = null ?? 39
    // val1 = undefined ?? 15
    val1 = null??10??20
    console.log(val1)

    //Terniary Operator (conditional Operator)

        // conditon ? true : false;
        const iceTeaPrice =100

         iceTeaPrice <= 80 ? console.log("less than 80"): console.log("more than 80")

