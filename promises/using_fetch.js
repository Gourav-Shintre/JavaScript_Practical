// async function demo(){
//     try {
//         const response=fetch('https://jsonplaceholder.typicode.com/users');

//     const data=(await response).json
//     console.log(data);
        
//     } catch (error) {
//         console.log(error);
        
//     }
    
// }
// demo()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((Error)=>{
    console.log(Error);
})