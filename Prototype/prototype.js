function user(username,password) {
    this.username=username;
    this.password=password;
}

user.prototype.nation="India";

user.prototype.printMe=function(){
    console.log(`user information  username is ${this.username} password is ${this.password} and nationality is ${this.nation}`);
}

const demo=new user("abc","abc@123")
demo.printMe()