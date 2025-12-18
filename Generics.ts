//interface defines structure of obj

interface shop {
  readonly id: number;
  name: string;
}

const s: shop = {
  id: 1,
  name: "igris",
};

//s.id = 2 // this will give error as its readonly so we cannot change the value

//interface for fn

interface DiscountCalc {
  (price: number): number;
}

const applyoffer: DiscountCalc = (price) => price * 0.5;

interface TeaMachine {
  start(): void;
  stop(): void;
}
const machine: TeaMachine = {
  start() {
    console.log("started");
  },
  stop() {
    console.log("stopped");
  },
};

//index signature

interface chaiRating {
  [flavor: string]: number; // using this you can add as many variables as you want in object but they should have a numeric value
}
const rating: chaiRating = {
  masala: 4.5,
  adrak: 4,
};

//if two interfaces have same name their properties get merge

//interfaces can also be extended

interface A {
  a: string;
}
interface B {
  b: string;
}

interface C extends A, B {}

//GENERICS (is helpful when we make libraries or framework)

//generics are also templates like interface , generics makes the code reusable

function wrapInArray<T>(item: T): T[] {
  return [item];
} // T can be any data type here , but here item will also be the same data type and the return value will also be the same data type

//now we can call this fn many times

wrapInArray("pizza");
wrapInArray(11);
wrapInArray({ flavor: "chocolate" }); // we can even pass objects , now its the duty of fn to convert it into array

//example 2:
function pair<A, B>(a: A, b: B): [A, B] {
  //return [b, a ] this will give error

  return [a, b];
}

pair("yoyo", "honey");
pair("pizza", 1000);
pair("condom", { flavor: "chocolate" });

//generic interface
interface Box<T> {
    content : T
}

const numberBox: Box<number> = {// we could have put here string or any custom data type
    content: 10 // if we put here string it will giev error 

}
const numberBox2: Box<string> = {
    content:"wow"
}
//partial , pick , omit can also be used with generics

//generics are mostly used in api responses , form state of react

//example:

interface ApiPromise<T>{
    status: number,
    data: T
}

const res: ApiPromise<{ flavor: string }> = {
    //here we have defind data type as obj 
    status: 200,
    data:{flavor:"string"}
}