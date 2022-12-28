class Person { 
    constructor(_firstNmae,_lastName)  
    {  
        this._firstName = _firstNmae;
        this._lastName = _lastName;
        console.log("Hey there");
    }
    display(){
        console.log("Person Details:",+this._firstName, this._lastName);
    }
}

    module.exports = Person; //export class example and all its properties 