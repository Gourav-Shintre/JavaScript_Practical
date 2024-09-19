class User{
    constructor(username){
        this.username=username
    }
    LogIn(){
        console.log(`${this.username} successfully logged in`);
    }

}

class Teacher extends User{
    constructor(username,salary,age){
        super(username)
        this.salary=salary
        this.age=age
    }

    LogIn(){
        console.log(`${this.username} logged in sucessfully`);
    }
}

const chi=new Teacher("bob",12345,22)
chi.LogIn()
console.log(chi.salary); 