const promiseFive=new Promise(function(resolve,reject){
    setTimeout(() => {
        let Error=true
        if(!Error){
            resolve({username:"abc",pass:"123"})
        }
        else{
            reject("error: Js went wrong")
        }
        
    }, 2000);
   
});

async function demo(){
    try {
        const response=await promiseFive
    console.log(response);
        
    } catch (error) {
console.log(error);
    }
    
}
demo()