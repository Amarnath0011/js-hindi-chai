// ************** REDUCE IN JS*****************

const myNums = [1,2,3]

// const myTotal = myNums.reduce(function(acc,curr){
//     console.log( `acc: ${acc} and curr : ${curr}`)
// return acc+curr
// },0)


const myTotal = myNums.reduce((acc,curr)=> acc+curr,0)
console.log(myTotal)

const shoppingCart =[
    {
        itemName : "js course",
        price:999
    },
    {
        itemName : "py course",
        price:999
    },
    {
        itemName : "mobile course ",
        price:5999
    },
    {
        itemName : "Data science ",
        price:12999
    },
    {
        itemName : "Dsa",
        price:2299
    }
]


const priceToPay = shoppingCart.reduce((acc,item)=>(acc + item.price),0)
console.log(`Rs: ${priceToPay}`)