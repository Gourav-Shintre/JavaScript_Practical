let language=['c++','java',"js","python"]
language.forEach((lang,index,arr)=>{
    console.log(lang,index,arr);
})

// function printme(val){
//     console.log(val);
// }

// language.forEach(printme)



                          // higher order functions which includes call back funcctions

// also used to acees objects inside a array  but not used on strings
let arr=[
    {
        name:"abc",
        age:22
    },
    {
        name:"xyz",
        age:24
    },
    {
        name:"pqr",
        age:33
    }

]

arr.forEach((val)=>{
    console.log(val.name , val.age);
})

// for each loop does not return anything that why we use filter

let nums=[1,2,3,4,5,6,7,8,9,10]
let newNums=nums.filter((val)=>{
    return val>5    
})
console.log(newNums);




let numbers=[1,2,3,4]

numbers.forEach((num)=>{
   console.log(num**2); 

})