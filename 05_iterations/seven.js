const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.map((item)=>item+2)

// console.log(newNums)

myNums.forEach((value)=>{
    value=value+2
    // console.log(value)
})

const newNums = myNums
                  .map((num)=>num*10)
                  .map((num)=>num+1)
                  .filter((num)=>num >= 40)

       console.log(newNums)