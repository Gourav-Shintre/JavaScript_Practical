let num=[1,2,3,4,5]

// we can store into new array  using map its not applicable for for each loop

// when there is scope {} we write return keyword otherwise dont write return
// let newNum=num.map((val)=>val+10)
// console.log(newNum);

let demo=num.map((val)=>val+20).map((val)=>val+1).filter((val)=>val>24)
console.log(demo);