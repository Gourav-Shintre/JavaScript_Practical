// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({username:"abc",password:"abc@123"})
        
//     }, 2000);
// }).then(function(user){
//     console.log(user);
// })


const promiseTwo=new Promise((resolve,reject)=>{
    setTimeout(() => {
        Error=false
        if(!Error){
            resolve({username:"abc",password:"abc@12345"})
        }
        else{
            reject("Something went Wrong")
        }
    }, 2000);
})

promiseTwo.then((user)=>{
    return user.username
}).then((username)=>{
    console.log(username);
}).catch((err)=>{
    console.log(err);
}).finally(()=>{
    console.log("promise is either resolved or rejected");
})