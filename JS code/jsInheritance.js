class Car {
    constructor(carBrand) {
        this.carbrand = carBrand;
    }
    present() {
        return 'I have a ' + this.carbrand;
    }
}

class Model extends Car {
    constructor(carBrand, carModel) {
        super(carBrand);
        this.carModel = carModel;
    }
    show() {
        return this.present() + ', it is a ' + this.carModel;
    }
}

let myCar = new Model("Audi", "Quatro");

console.log(myCar.show());

//getter/setter:
class CarVolvo {
    constructor(brand) {
        this._carname = brand;
    }
    get carname() {
        return this._carname;
    }
    set carname(x) {
        this._carname = x;
    }
}

let myVolvo = new CarVolvo("VW");
myVolvo.carname = "Volvo";
console.log(myVolvo.carname);
