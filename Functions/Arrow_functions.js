                      // Arrow functions are compact way to write functions


// const arrfun=(a,b)=>{
    
// }
// arrfun(4,4);

// let mul=(c,d)=>{
//     console.log(c*d);
// }
// mul(2,3)

const add=(a,b)=>
    {
        return a+b;
    }
let c=add(3,3);
console.log(c);

let demo=(a,b)=>a/b
console.log(demo(10,2)); 


let count=0
let vowel=(str)=>{
    for (const i of str) {
        if(i==='a' || i==='e' || i==='i' || i==='o' || i==='u' ){
            count++
        }
    }
    return count
   

}
let string="Hello Welcome to JS"
console.log(vowel(string));