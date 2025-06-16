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
    
    submit() {                                     // <= Method
        console.log(`Hey ${this.userName} Your rigistration has been recorded`);

    }
}

const rigisObj = new Rigistration(12345)
console.log(rigisObj);
rigisObj.submit()

// Properties Of OOP(Object-Oriented Programming)

// 1) Abstruction
// 2) Encapsulation
// 3) Inheritance 
// 4) Polymorphism
