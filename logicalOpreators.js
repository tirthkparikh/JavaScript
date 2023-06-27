let test1 = true && "orange";
let test2 = 0 && "orange";
let test3 = false && "orange";

let test4 = true || "orange";
let test5 = false || "orange";
let test6 = 0 || "orange";

console.log(test1, test2, test3, test4, test5, test6);

// for &&
//true+ any value => any value
// false +any value => false

// for ||
//true+ any value => true
// false +any value => any value

// && and || works exact opposite in terms of assigning value

// what things are false ?
//false,0,"",NAN,undefined,null

//  use below code as playground and change ++a and --a to understand abovce concept
let a = 1;
console.log(++a && --a && --a);
// --a =0 , so in and::::> any value and false => false /0
let b = 1;
console.log(--b || ++b || b--);
//--b=0, 0||1 => 1 || 2 => in or true and any value  is always true so 1

console.log(15 || 2); //gives first value as in or when first value is true it returns first value
console.log(2 && 15); //gives second value as in and when first value is true it returns second value

// new opreator ?? it works as or for ture case and works as and in false case except nullß

let test7 = true ?? "orange"; // consider as true in or
let test8 = false ?? "orange1"; // consider as true in or
let test9 = NaN ?? "orange2"; // consider as true in or
let test10 = 0 ?? "orange3"; // consider as true in or
let tesst11 = null ?? "orange4"; // consider as false in or
let test12 = "" ?? "hi"; // dosen't return any value
console.log(test7, test8, test9, test10, tesst11, test12);
