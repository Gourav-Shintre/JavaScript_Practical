class user{
    constructor(username,password,emial){
        this.username=username
        this.password=password
        this.emial=emial
    }

    encryptPass(){
        console.log(`${this.password}qwe`);
    }

    capital(){
        console.log(`${this.username.toUpperCase()}`);
    }



}

const demo=new user("abc","abc@123","ana@.com")
demo.encryptPass()
demo.capital()