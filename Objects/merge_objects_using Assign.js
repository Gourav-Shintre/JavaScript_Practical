let demo_symbol=Symbol("key");
const obj1={1:"a",[demo_symbol]:"key"};
const obj2={4:"b",2:"c"};

const obj3=Object.assign({},obj1,obj2);

console.log(obj3);

const obj4={6:"six",7:"seven"};
const obj5={8:"eight",9:"nine"};
const obj6={...obj4,...obj5};
console.log(obj6);


// output gives in array 
console.log(Object.keys(obj3));
console.log(Object.values(obj3));
console.log(Object.entries(obj3));