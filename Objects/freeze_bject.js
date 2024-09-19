const jsUser={
    email:"abc@gmail.com",
    age:23
};
jsUser.email="xyz@gmail.com";
console.log(jsUser);
Object.freeze(jsUser);

jsUser.ag=25;
console.log(jsUser);