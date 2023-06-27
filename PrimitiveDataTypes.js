//Basic primitive data types

//primitive data types will always point to diffrent values
//if we make 2 var named hello changing one var won't affect value of other which makes it primitive

/////////////////////////////

// types

//Basic primtive data types

// String=>"tirth","hello"
// Number => includes all num int and float and whole
// Boolean=> true or false
// null
// undefined

//IMP NOTE WE CAN DIFFRENTIATE BETWEEN NULL AND UNDEFINED BY TYPEOF()
// TYPE OF OF UNDEFINED IS UNDEFINED
// TYPE OF NULL IS OBJECT

//Advanced primtive data types

//bigInt =>BigInt values represent numeric values which are too large to be represented by the number primitive.
//Symbol =>it will give unnique identification even though 2 variables will have same value

////////////////////////////////

// types of declartion let, const and var

//var is not used anymore we can use it but prefer not too
//let and const are used now a days
//let=>no redeclartion but reassignment possible
//const=>no redeclartion nor assignment
//we cannot declare and asignment independent in const
//we can declare and asignment independent in let

////////////////////////////////

// basic primtive data types example

let city = "ahemdabad";
//declaration
let country;
//asignment  also we can change assignment's data type
country = "India";
country = "USA";
country = 20;
country = true;
console.log("country", country);

const name1 = "tirth";
let name2 = "tirth";
name2 = "tirth1";

if (name1 === name2) {
  console.log("hi");
} else {
  console.log(name1, name2);
}

const name = "tirth";

//Null and undefined
const empty = null;
const empty2 = undefined;
typeof (empty, empty2);
console.log(empty2, empty);
console.log(typeof empty);
console.log(typeof empty2);

//advanced primtive data types

//symbol refrence
// we dont use symbol unless:
//Symbols have two main use cases: “Hidden” object properties.
//  If we want to add a property into an object that “belongs” to another script or
//  a library, we can create a symbol and use it as a property key.

let a = Symbol("tirth");
let b = Symbol("tirth");
if (a == b) {
  console.log("== is true for symbol", a, b);
} else {
  console.log("== is not true for symbol", a, b);
}
if (a === b) {
  console.log("=== is true for symbol", a, b);
} else {
  console.log("=== is not true for symbol", a, b);
}
let c = Symbol(5);
let e = Symbol(5);
console.log(c, e);
console.log("c == e", c == e);

//Bigint => adds n at last
// remember 1n = 1
// BigInt values are similar to Number values in some ways,
// but also differ in a few key matters: A BigInt value cannot be used with methods in the built -in Math object
// and cannot be mixed with a Number value in operations;
// they must be coerced to the same type.
// Be careful coercing values back and forth,
// however, as the precision of a BigInt value may be lost when it is coerced to a Number value.
//Only use a BigInt value when values greater than 2**53 are reasonably expected.

let value = BigInt(1000);
console.log(value);
let value2 = 3n;
console.log(value * value2);
console.log(Number(value * value2));
console.log(Number(value * value2) == value * value2);

console.log(true + true); //1+1
console.log(true + false); //1+0
console.log(false + false); //0+0
