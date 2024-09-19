const promiseOne=new Promise(function(resolve,reject){
    setTimeout(function() {
        console.log("asynch task completed");
        resolve()
    }, 2000);
})

promiseOne.then(function(){
    console.log("promise consumed");
})

new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log("asynch 2 completed");
        resolve()
    }, 3000);
}).then(function(){
    console.log("asynch 2 resolved");
})