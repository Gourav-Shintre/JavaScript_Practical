let arr=[1,2,3,4,5];
console.log(typeof(arr));

let arr1=new Array(2,4,6,78)
console.log(typeof(arr1));


arr1.push(45)
console.log(arr1);

// used to covert into string type
let joined_arr=arr1.join()
console.log(joined_arr);

// pop is used to remove from last and we ddin't pass the argument to it
console.log(arr1.pop()); 
console.log(arr1);


// unshift is used to add to the first  and push to add to the last
arr1.unshift(100);
console.log(arr1);


// shift is used to remove first element from array we ddin't pass the argument to it
arr1.shift()
console.log(arr1);

// used to check value exist in array or not return boolean
console.log(arr1.includes(100));


// used to check position of value
console.log(arr1.indexOf(6));


const fruits = ["banana", "apple", "peach","mango","jackfruit"];
console.log(fruits.slice(0,2)); 
console.log(fruits);

// splice will change the original array
console.log(fruits.splice(0,2));
console.log(fruits);

let arr2=['jan','feb','march','april','may']
arr2.splice(0,1,'dec','nov')
console.log(arr2);


let heroes=['thor','spiderman','batman','hulk']
let powers=['hammer','fly','power','strength']
let dc_heroes=['batman','superman','flash']

// used to merge two arrays
let hero_powers=heroes.concat(powers)
console.log(hero_powers);

//spread is used tp merge more than two arrays
let spread_arr=[...heroes,...powers,...dc_heroes]
console.log(spread_arr);
console.log(spread_arr[3]);

// to merge nested array
const myArr = [1, 2, [3, [4, 5, 6], 7], 8];
const newArr = myArr.flat(Infinity);
console.log(newArr);


// .from is used to convert into array but type will not change and isarray is used to check this is array or not
let str="hello"
console.log(Array.isArray(str))
console.log(Array.from(str)); 
console.log(typeof(str)); 

// Array.of is used to covert into array from values
let score=10;let score1=20;let score2=30;
console.log(Array.of(score,score1,score2));
