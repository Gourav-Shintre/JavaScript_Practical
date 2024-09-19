function setUsername(username){
    this.username=username
    console.log("called");
}
function createUsername(username,email,pass){
    setUsername.call(this,username)
    this.email=email
    this.pass=pass

}
const demo=new createUsername("anna","anna@createUsername.com",123)
console.log(typeof(demo)); 
console.log(demo);