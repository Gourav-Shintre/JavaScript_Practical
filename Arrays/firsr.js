let stu=[50,60,33,45,86,100];
let sum=0;
for(let i of stu)
    {
        sum=sum+i;
    }
    console.log(sum);
let average=(sum/stu.length);
console.log(`Avergae marks of students are ${average}`);