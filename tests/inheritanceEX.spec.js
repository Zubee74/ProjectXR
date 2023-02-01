class Fruit{
    constructor(name, price){
        this.name=name;
        this.price=price;
        console.log("Fruit Details:");
    }
     show() {
        console.log("Name"+this.name+"Price"+this.price);
    }
}

class Mango extends Fruit{

}
const a = new Mango("Mango",20);
a.show();

