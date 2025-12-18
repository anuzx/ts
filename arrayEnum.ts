//ARRAY

const chaiFlavours: string[] = ["masala", "adrak"];

//other way

const rating: Array<number> = [4, 5, 6];

//array of objects

type chai = {
  name: string;
  price: number;
};
//this restricts the properties inside the obj
const menu: chai[] = [
  { name: "masala", price: 20 },
  { name: "adrak", price: 40 },
];

//readOnly array

const cities: readonly string[] = ["lucknow", "delhi"];
//cities.push("push") we cannot do this , it will give error

//multidimensional array
const matrix: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];

//TUPLES :tuple is a special type of array with a fixed number of elements, where each element can have its own specific, predefined data type and a guaranteed order

let chaiTuple: [string, number];
chaiTuple = ["masala" , 50 ]

let userInfo: [string, number, boolean?]
userInfo = ["icarus", 11, true]

//readonly tuple
const coordinates: readonly [number, number] = [20, 20]

//named tuple
const chaiItems: [name: string, price: number] = ["masala", 25]



//ENUMS :retricts the choice

enum Cupsize {
    SMALL,
    MEDIUM,
    LARGE
}

const size = Cupsize.LARGE // "." will give only 3 options

//auto increment value 

enum status {
    PENDING = 100, // now that we have given it value of 100 ,so either we have to give value to every property after PENDING or they will get an incremental value on their own 
    SERVED, //101
    CANCELLED //102
}

//we can put const before enum keyword too

