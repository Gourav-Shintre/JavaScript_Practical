let map=new Map();
map.set("first",1)
map.set("second",2)
map.set("third",3)
map.set("fourth",4);

for (const [key,val] of map) {
    // console.log(key,'=',val);
    
}

// for of loop is not applied on objects
// let obj={
//    " first" : 1,
// "second" : 2,
// "third" : 3,
// "fourth" : 4

// }
// for (const [key] of obj) {
//     console.log(key);
    
// }

// for in is used for objects and aslo for array also
let obj={
    " first" : 1,
 "second" : 2,
 "third" : 3,
 "fourth" : 4
 
 }

 for (const key in obj) {
   console.log(`${key} is key and value is ${obj[key]}`);
 }

//  we can use for in loop o arrays also
 let array=['cpp','java','js','python']
 for (const key in array) {
    console.log(array[key]);
    
 }