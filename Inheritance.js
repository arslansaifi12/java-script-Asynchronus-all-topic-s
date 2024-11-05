class user {
    constructor(name,behaviour) {
        this.naam=name
        this.personality=behaviour
    }
}

class teacher extends user{
    constructor(naam,personality,email,education){
        super(naam,personality)
        this.email=email
        this.padhai=education

    }

}
let Usern=new user("kaif",`good`)
// console.log();


let chnge=new teacher("arslan","harami","arslan@gmail.com",12)
console.log(chnge);


console.log( Usern === chnge);
