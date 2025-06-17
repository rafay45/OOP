// Class and Object

class User {                                           // <= Class
    name = 'Rafay'
    fatherNames = 'Feheem'
    age = 19
    cnic = 12345678912
}

const userObj = new User()                            // <= Object
console.log(userObj);

// Using Constructor

class Company {
    brand = 'J.'
    companyName = 'faheem Garments'
    shirt;
    pent;
    constructor(shirt, pent) {                       // <= Constructor
        this.shirt = shirt
        this.pent = pent
    }
}

const companyObj = new Company('POLO', 'cotorn')    // <= constructor Called on here, basically 'new' keyword call the constructor
console.log(companyObj);

// Using Method 

class Rigistration {
    userName = 'rafay45'
    email = 'rafay123@gmail.com'
    password;
    constructor(pass) {
        this.password = pass
    }

    submit() {                                      // <= Method
        console.log(`Hey ${this.userName} Your rigistration has been recorded`);

    }
}

const rigisObj = new Rigistration(12345)
console.log(rigisObj);
rigisObj.submit()

// Properties Of OOP(Object-Oriented Programming)

// 1) Abstruction

class Car {
    startEngine() {
        console.log('Hmmmm Hmmmmmmm...');
    }

    drive() {
        this.startEngine()                        // <= abstraction applied here
        console.log('Hmmmmmmmmmmmmm...');
    }
}

const carObj = new Car()
console.log(carObj);
carObj.drive()

// 2) Encapsulation

class UserData {
    name = 'Rafay'
    fatherName = 'Faheem'
    age = 19
    #email;                                       // Private Property                           
    #password;                                   // Private Property

    constructor(email, password) {
        this.#email = email
        this.#password = password
    }

    getPassword() {
        return this.#password;
    }

    setMethod(newEmail, newPassword) {
        if (newEmail === this.#email && newPassword.length >= 6) {
            this.#password = newPassword;
            console.log("you have been allowed here");

        } else {
            console.log("you are not Allow here");

        }
    }
}

const userDataObj = new UserData('rafay123@gmail.com', '123456')
console.log(userDataObj);
userDataObj.setMethod('rafay123@gmail.com', '236854');
// console.log(userDataObj.#password);       <= Uncaught SyntaxError: Private field "#password"


// 3) Inheritance

class Animals {
    firstPet = 'Cat'
    scondPet = 'Dog'
    thirdPet;

    constructor(thirdPet) {
        this.thirdPet = thirdPet
    }
    speak() {
        console.log(`The ${this.firstPet} makes a sound meow`);

    }
}

class moreAnimals extends Animals {             // <= inheritance applied here      
    speak() {
        super.speak()                          //  <= super Call the parent method 
        console.log(`The ${this.scondPet} is Deaf`);

    }
}
const aniObj = new moreAnimals("Parrot")
console.log(aniObj);
aniObj.speak()


// 4) Polymorphism

class clothes {
    type() {
     console.log('Clothes');
     
    }
}

class shirt extends clothes{
    type(){
        console.log('T-shirt');
        
    }
}

class pent extends clothes{
    type(){
        console.log('Pent');
        
    }
}
class jacket extends clothes {
    type(){
        console.log('Jacket');
        
    }
}
// Clothes of Object 
const clothesObj = [new clothes(), new shirt(), new pent(), new jacket()]


clothesObj.forEach(clothe => clothe.type())              // <= Polymorphism in action
