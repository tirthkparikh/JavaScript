//understanding prototype is three step process
// let us make our object

// step -1
const animal = {
  type: "monkey",
  numLegs: 2,
};

//now animal will have 2 property as we now till now type and numlegs

console.log(animal);
console.log(animal.numLegs);
// console.log(animal.hello()); this wont run as there is no hello fn in animal obj
console.log(animal.toString());

//step - 2

// so why did toString ran ?
// this is because of prototype property in obj
// whenever a obj is created it will have 2 types of prop and methods
// 1st is prop and method in thier own scope and other that is provided by protoype obj in JS
// it forms a protoype chain animalscope=>parentscope(if our animal is extension of any other obj)=>...=>protoypescope=>null

console.log(animal.__proto__); //protype obj
console.log(animal.__proto__.__proto__); //null as no way up

//step-3

// main concept
// objects in js have many static methods keys,entry,protoype etc
// among all of them protoype property points to protoype obj in them
// these p[[prototype]] obj has many methods
// so when we create a new obj of our own it will have all methods that it has as well as methods defied in protoype obj
// for eg  animal.toString() will work but animal.keys() wont work as former method is decribed inside protoype and second one is described direct under obj
// so to use keys() method we use Object.keys(animal)

// we can create inheritance with this concept

console.log(Object.getOwnPropertyNames(Object)); // this will show all properties object contains
console.log(Object.getOwnPropertyNames(animal)); // this will show all propertis animal contains
console.log(Object.getOwnPropertyNames(animal.__proto__)); // this will show all properties prototype of main obj in js contains

// point to note there is static protoype method in object that points to [[protoype]]object which is shared with the object that we create
// [[protoype]] props can be used direct on our obj as they are sahred

// we can add more props to js object's protoype obj by
//however this should not be done
Object.prototype.speak = () => {
  console.log("hi from prototype");
};
//now protoype contains method speak
// so now we use animal.speak()
animal.speak();

// for bifarcation
// whenever we use obj.xyz => xyz is static proprty of objects in js which can not be used directly
// whwenever xyz is protoype => it will point to protype obj defined by [[protoype]]
// this protoype has some methods for eg 'toString','valueOf' etc
// they can directly be used

// we can change protoype of new created object as well

const mamel = {
  type: "monkey",
  __proto__: Array.prototype, //it means that mamel should contaion such properties in protoypes, that props are present in array's prototype
};

console.log(mamel); // this will show array obj as we changed parent protoype to array

// below is how chaining of protoypes happen
console.log(Object.getOwnPropertyNames(mamel)); // will show mamel's persnal prop
console.log(Object.getOwnPropertyNames(mamel.__proto__)); // will show mamel's parent's protoype prop in our case array's protoype
console.log(Object.getOwnPropertyNames(mamel.__proto__.__proto__)); // now as we know array's are also a type of obj in js so they will point to object's protoype methods

console.log(mamel.__proto__.__proto__.__proto__); // null as no way up

console.log(mamel.length); //proof that arrays's protoype method work on our obj when we change pointing of our obj's parent protoype to array,
// by default it is obj's protoype in other case chaining like this
