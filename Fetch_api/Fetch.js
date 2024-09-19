const url = "https://cat-fact.herokuapp.com/facts";
const btn=document.querySelector('#btn');
const para=document.querySelector('#para');

// //by async awit
// const getFacts = async () => {
//     console.log("loading");
//     try {
//         let response = await fetch(url);
//         console.log(response);
//         let data = await response.json();
//         para.innerHTML=(data[3].text);
//     } catch (error) {
//         console.log(error);
//     }
// };

//by chaining of then
function getFacts(){
    fetch(url).then((response)=>{
        return response.json()
        
    }).then((data)=>{
         console.log(data);
        para.innerHTML=data[2].text
       
    });
}


btn.addEventListener('click',getFacts)
