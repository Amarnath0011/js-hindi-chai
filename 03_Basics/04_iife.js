//Immediately Invoked Function Expression


(function chai(){
    // console.log("DB connected")
})() ;  //to stop pollution from global scope 

((name)=>{
    console.log(`DB Connected ${name} `)
})("Amarnath");

//Two write two iife we should use semicolon after one 

//iife :-  it runs any program immediately after execution of code 