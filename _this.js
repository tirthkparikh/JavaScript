// // let us consider we want a method we want to use on multiple obj's
// // we should not duplicate code

// //note-arrow fn shld not be used with this

// // never add methods or properties on protype obj as shown below in line 15 that is just for understanding

// let thor = {
//   name: "thor",
// };

// let iron = {
//   name: "ironMan",
// };

// Object.prototype.greet = function (hero) {
//   console.log(this); //will point to obj on whome greet method is caleld`
//   console.log(`hello good morning ${this.name}`);
// };

// thor.greet();
// iron.greet();

// //what does this point to?
// // this points to obj on whom that method is called.
// //for example when we run thor.greet(), this points to thor obj.(bind to thor obj)

// const tirth = {
//   name: "tirth",
//   greet: function () {
//     console.log(this);
//     console.log(`${this.name} hello`);
//   },
//   arrowGreet: () => {
//     console.log(this);
//     console.log(`${this.name} hello`);
//   },
// };

// tirth.greet();
// //here greet contains this so this will bind itself to tirth obj as it is on left side of fn call
// tirth.arrowGreet();

// understanding scope for this

// const sonali = {
//   name: "sonali",
//   friend: {
//     //   name : "keyur" by removing this  console fn would work
//     greet: function () {
//       console.log(this);
//       console.log(`${this.name} is my friend hello`);
//     },
//   },
// };

// sonali.friend.greet();
//this will give undf as this is used in greet fn and left side of greet is friend obj
// but friend dosent have name in its scope
// so this will just look at parent scope that is it will look in friend and not sonali

/// understading call method
const sonal = {
  name: "sonal",
  friend: {
    name: "keyur",
    greet: function (a, b, c, d) {
      console.log(this, "this is this at time of call");
      //   console.log(a, b, c, d);
      console.log(`${this.name} is my friend`);
    },
  },
};

// sonal.friend.greet({ name: "tirth" });
// sonal.friend.greet({ name: "tirth" }, 1, 2, 3);
// console.log("++++++++++++++++++++++++++++++++");
// sonal.friend.greet.call({ name: "tirth" });
// sonal.friend.greet.call({ name: "tirth" }, 1, 2, 3);
// console.log("++++++++++++++++++++++++++++++++");
// sonal.friend.greet.call(1, 2, 3); //here this will be num:1;
// sonal.friend.greet.call(); //here this will be global;
// whenever we call  method this will this time point to first arg inside call fn not on friend obj this time

// aplly()

// now apply works same as call diff is we can only have 2 arguments 1st where this points and second array of all otjer args

// sonal.friend.greet.call({ name: "tirth" }, 1, 2, 3);
// sonal.friend.greet.apply({ name: "tirth" }, [1, 2, 3]);

//bind

// whenever we use bind on fn we will get a new fn which will forcefully bind to a value
//we can also bind a value to main fn two eg shown below

//1 concept to get new fix fn wihout changing orignal
// const tirthBind = sonal.friend.greet.bind({ name: "tirth" }); //this gives us new fn that binds this to tirth permanant
// console.log(tirthBind, tirthBind());
// console.log(sonal.friend.greet());

//2 concept fixing main this to a particular value no matter what we do it wont change

// sonal.friend.greet = sonal.friend.greet.bind({ name: "changed permenantly" }); // now we changed permanent pointing of bind to new value
// // after binding permnantly we can see that no matter what we do this will point to a fix value
// sonal.friend.greet.call({ name: "tirth" }, 1, 2, 3);
// sonal.friend.greet.apply({ name: "tirth" }, [1, 2, 3]);
// sonal.friend.greet();

// new keyword in this
function Hero(name) {
  this.name = name;
  this.greet = function () {
    console.log(this);
    console.log(`${this.name} says awesome!`);
  };
}

const storm = new Hero("Storm");
console.log(storm);

storm.greet();
storm.greet.call({ name: "Cyborg" });

console.log("--------");

console.log(Object.getOwnPropertyNames(storm));
console.log(Object.getOwnPropertyNames(storm.__proto__));
console.log(Object.getOwnPropertyNames(storm.__proto__.__proto__));

console.log(storm.__proto__.constructor.name);
console.log(storm.__proto__.__proto__.constructor.name);
console.log(storm.__proto__.__proto__.__proto__);

// Hero => Object => null
