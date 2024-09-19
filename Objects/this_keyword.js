const person={
    name:"abc",
    email:"abc@gmail.com",
    age:24,
    gender:"M"
};
console.log(person);

// adding function to objecct
person.fun=function(){
    console.log("Hello welcome to JS");
}

console.log(person.fun());


// use of this keyword if you want to refer same bject variable
person.fun2=function(){
    console.log(`this is the JS and your email is ${this.email}`);
}

console.log(person.fun2());



const obj={
    obj_name:"abcd",
    abj_price:500
};

obj.add_info=function(){
    console.log(`${this.obj_name} review is good`);
};

console.log(obj.add_info());