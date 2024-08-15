//Tipos de datos
let string = "I'm a string";
console.log(typeof string);
console.log(string);

let number = 20;
console.log(typeof number);
console.log(number);

let boolean = false;
console.log(typeof boolean);
console.log(boolean);

let invalid = null;
console.log(typeof invalid);
console.log(invalid);

let indefinite = undefined;
console.log(typeof indefinite);
console.log(indefinite);

let notNumber = NaN;
console.log(typeof notNumber);
console.log(notNumber);

//Tipos de dato Objeto
const list = ["Dante", 3, true, ["Triz", 2, 10]];
const list2 = new Array(1, 5, 18);
console.log("matriz", list);
console.log("matriz index", list[3][0]);
console.log("array", list2);
console.log("array index", list2[1]);

const object = {
  name: "EA",
  age: 35,
  isAuthenticated: true,
  elements: ["unknown", 30, 6],
}; // Los objetos llevan elementos "key-value"
console.log("Object with all elements", object);
console.log("Object name", object.name);