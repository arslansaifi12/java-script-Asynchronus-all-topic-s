

class User {

    constructor(username,email,password){

        this.username=username
        this.email=email
        this.password=password
    }

    changeusername(){
       return `${this.username.toUpperCase()}`
    }

    encryptpassword(a,b){
        return this.password,"..."
    }
    
    
}

let details=new User("arslan","arslan@gmail.com",123)

console.log(details.encryptpassword());

//second

function User1 (name, email, password) {
    this.name=name 
    this .email=email
    this .password=password  
  
}

User1.prototype.encryptpassword = ()=> {
    return this.password ,"abc"
}

let details1=new User1("arslan","arslan@gmail.com",786)
console.log(details1.encryptpassword());
