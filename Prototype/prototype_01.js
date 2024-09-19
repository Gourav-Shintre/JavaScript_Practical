const heroes=['thor','spiderman'];
const superPowers={
    thor:"hammer",
    spiderman:"flying"
};
function captainAmerica(){
    console.log("this is captain America");
}

Object.prototype.strengthPower=function(){
    console.log("this is the common power of all heroes");
};

heroes.strengthPower();
superPowers.strengthPower();

Array.prototype.demo=function(){
    console.log("this is only for heroes");
};

Function.prototype.power=()=>{
    console.log("my power is Sheild");

}

heroes.demo();
// superPowers.demo();
captainAmerica.power()