// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Hello my friend!");
//     resolve("Here is your ice cream!");
//     reject("Sorry, no ice cream for you!");
//   }, 2000);
// });

// myPromise
//   .then((resolvedValue) => {
//     console.log("promise seems to be done!");
//     console.log(resolvedValue);
//     console.log(myPromise);
//     return "yo!";
//   })
//   .catch((error) => {
//     console.log(error);
//     console.log(myPromise);
//   })
//   .then((anotherValue) => {
//     console.log(anotherValue);
//   });

// console.log("Hello?");
// console.log(myPromise);

console.log("Program started");

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
  }, 3000);

  setTimeout(() => {
    reject();
  }, 5000);
});

console.log(myPromise);
console.log("Program in progress...");

myPromise
  .then(() => {
    console.log("Program complete");
  })
  .catch(() => {
    console.log("Program failure");
  });
