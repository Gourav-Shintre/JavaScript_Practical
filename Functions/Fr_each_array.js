let arr=[1,2,3,45];
arr.forEach(function f(i)
{
    console.log(i);
})

let arr1=["mumbai","pune","sangli"];
arr1.forEach((val)=>{
    console.log(val);
    val.split('').forEach((i)=>{
        console.log(i);
    });


});