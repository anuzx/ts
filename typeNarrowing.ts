function typeNarrow(kind: string | number) {
  if (typeof kind === "string") {
    return `making ${kind} chai...`;

    // here if we do kind. then we will only get suggestions of methods realted to strings
  }
  return ` other ${kind}`; // here we will get suggestions to methods related to number only
}

//example 2

function exampleTwo(msg?: string) {
  if (msg) {
    return ` this is the msg ${msg}`;
    // in this block we know msg exist
  }
  return "no message";
}

//example 3

class kulhadChai {
  serve() {
    //this method returns a simple string
    return `serving kulhad chai`;
  }
}
class cutting {
  serve() {
    return `serving a cutting chai`;
  }
}
//here methods of 2 classes collided
function serve(chai: kulhadChai | cutting) {
  //to make sure which method is being called
  if (chai instanceof kulhadChai) {
    return chai.serve();
  }
}

//example 4 : making own types

type chaiOrder = {
  type: string;
  sugar: number;
}; //this way we can create types to handel api responses

function isChaiOrder(obj: any): obj is chaiOrder {
  //this fn will only return a obj of data type chaiOrder , so we can put "." and use type or sugar

  return (
    typeof obj === "object" &&
    obj !== null &&
    typeof obj.type === "string" &&
    typeof obj.sugar === "number"
  );
}

function serverOrder(item: chaiOrder | string) {
  //this is a guard check
  if (isChaiOrder(item)) {
    return `serving ${item.type} chai with ${item.sugar}`;
  }
  return `serving custom chai: ${item}`;
}

//example 5 : way of defining type

type masalaChai = {
  type: "masala"; // this type here is just a property
  spicelevel: number;
};
type GingerChai = {
  type: "ginger"; 
  amount: number;
};

type chai = masalaChai | GingerChai //now we can use it easily 

function makeChai(order :chai) {
    switch (
      order.type // here after using "." we will get option to select only type as only that can be have switch cases
    ) {
      case "masala": //in this case we will get option to select either masala or ginger
        return "masala chai";
        break;
      case "ginger": 
            return "ginger chai";
        break
    }
}

//sometimes we need to check that if certain property exist then we are sure what category it belongs to

function brew(order: masalaChai | GingerChai) {
    if ("spicelevel" in order) {
        return "its masala chai for sure"
    }
}

//example 6 :using unknown

//unknown type is safer than any , unkown means before using that variable we will assign the type but for any we dont ened to assign the type ever

function isStringArray(arr: unknown): arr is string[]{
    //this is usefull when we dont know the data type of input but we are sure the return value will be a certain data type
    
}