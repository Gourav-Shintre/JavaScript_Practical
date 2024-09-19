let nums=[1,2,3]
let newNums=nums.reduce((acc,curr_val)=>{
return acc*curr_val

},2)
console.log(newNums);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

let bill=shoppingCart.reduce((acc,curr_val)=>acc+curr_val.price,0)
console.log(bill);