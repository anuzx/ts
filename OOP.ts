//either we can declare classes or their blueprint

class Chai {
  flavour: string;
  price: number;
//constructor is special method for defining the properties and methods of objects 
  constructor(flavour: string, price: number) {
    this.flavour = flavour;
    this.price = price;
  }
}

const masalaChai = new Chai("ginger", 30); // after defining constructor we are forced to pass values

masalaChai.flavour; // here "." will suggest only flavour or price even without declaring the constructor 

//public private

class coffee {
  public flavour: string = "chocolate"; //can be used outside the class
  private secretIngredients = "coffeeBean"; //cannot be used outside the class only within the class

  //if we want someone to access our private value , we make a method which controls how to access the private value
  reveal() {
    return this.secretIngredients;
  }
  
}
const c = new coffee();

c.reveal(); // we have to do this in order to access the private value

// we also use _ with private variable eg : private _sugar = 2

//in place of writing private we can use # eg: #balance = 300

//protected

class Shop {
  protected shopName = "chai corner"; //access within class or some class is inhereting it then only
}
class Branch extends Shop {
    getName() {
        return this.shopName
    }
}

new Branch().getName // we get the access of getname

//getter and setter 

class ModernChai {
  private _sugar = 2 
  // now as we have made it private so we cannot directly access it 

  get sugar() {
    return this._sugar
  }

  set sugar(value: number) {
    if (value > 5) throw new Error("too sweet") //if case
    this._sugar = value //else case
  }
}

const ch = new ModernChai()
ch.sugar = 3

//static :keyword that defines properties or methods that belong to a class itself rather than the objects created from that class (class owns anything static , not the objects)

class EkChai {
  static shopName = "chocho"

  constructor(public flavour: string) {
    
  }
}
console.log(EkChai.shopName) // to access static method or variable we need not to make object , we can directly access it from class 


//ABSCTRACT CLASSES : We want to make class but we dont want any obj should be made out of that class

abstract class Drink{
  abstract make() :void //abstract method
}

class Mychai extends Drink {
  // we are forced to make "make()" method otherwise we will get error 
  make() {
    console.log("abstract")
  }
}

//COMPOSITION 

class Heater {
  heat (){}
}

class chaiMaker {
  constructor(private heater: Heater) {}
  make() {
    this.heater.heat;
  }
}