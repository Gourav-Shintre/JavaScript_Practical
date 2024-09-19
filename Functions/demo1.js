function login(username){
    if(username===undefined){
        console.log("please enter username");
    }
    else{
        console.log(`${username} logged in successfully`);
    }

}
login();   //when we didn't pass any argument
login("abc"); //when we pass an argument



function demo(number1,number2){
    return number1+number2;
}

const a=demo(10,20);
console.log(a);


function calculatecartPrice(...num){
    return num
}

console.log(calculatecartPrice(1000,200,300));  


const user={
    username:"abc",
    prices:100
};

function calPriceUser(user1){
    console.log(user1.username,user1.price);

}

calPriceUser({
    username:"xyz",
    price:2233
})



const arr=[100,200,300,400];
function getFirstValue(val){
    return val[2]
}
console.log(getFirstValue(arr)); 
