//1) declaring object types

let tea: {
  name: string; //seperated by semicolon
  price: number;
  isHot: boolean;
};

tea = {
  name: "masala", //seperated by comma
  price: 100,
  isHot: true,
};

// 2) alias object

type Tea = {
  name: string; //seperated by semicolon
  price: number;
  ingredients: string[];
};
//object made from custome type
const chai: Tea = {
  name: "masaala",
  price: 1000,
  ingredients: ["ginger", "teaLeaves"],
};

//3) duck Typing

type brew = { brewTime: number };
const coffee = { brewTime: 5, beans: "arbica" };
const chaiBrew: brew = coffee;
// this is not giving any error although we have mentioned extra property because bare minimum is fullfilled so we need to keep an eye while using this

//4) using data types

//partial
type chai = {
  name: string;
  price: number;
  isHot: boolean;
};

const updateChai = (updates: Partial<chai>) => {
  console.log("updateing chai with", updates);
};

updateChai({ price: 200 }); //now we can partially update it even we can pass an empty object

//required

type order = {
  name?: string;
  quantity?: number;
};

const placeOrder = (orderchai: Required<order>) => {
  console.log(orderchai);
};
//now we will stritcly have to use all properties although we haved used ? which means if we want we can use and if we want we dont

placeOrder({
  name: "okkk",
  quantity: 11,
});

//pick

type pizza = {
  name: string;
  price: number;
  isHot: boolean;
  ingredients: string[];
};
type basicInfo = Pick<pizza, "name" | "price">;

const pizzaInfo: basicInfo = {
  name: "farmHouse",
  price: 1000,
};
//the error goes after we used name and price so Pick is used to pick certain proterties from a data type

//Omit
type Newpizza = {
  name: string;
  price: number;
  isHot: boolean;
  SecretIngredients: string;
};

type PublicPizza = Omit<Newpizza, "SecretIngredients">; // it omits a certian value


