//async genrator
// const asyncGenerator = async function* () {
//   yield new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(1);
//     }, 1000);
//   });
// };

// const asyncGeneratorObject = asyncGenerator();

// console.log(asyncGenerator);
// console.log(asyncGeneratorObject);

// const asyncGeneratorExecuter = async () => {
//   for await (const promise of asyncGeneratorObject) {
//     console.log(promise);
//   }
// };

// asyncGeneratorExecuter();

//infinite
// const asyncGenerator = async function* () {
//   let i = 0;
//   while (true) {
//     yield new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(i);
//       }, 1000);
//     });
//     i++;
//     yield* [1, 2, 3];
//   }
// };

// const asyncGeneratorObject = asyncGenerator();

// console.log(asyncGenerator);
// console.log(asyncGeneratorObject);

// const asyncStarter = async () => {
//   for await (const number of asyncGeneratorObject) {
//     console.log(number);
//   }
// };

// asyncStarter();
// console.log("Hello???");

//promises in genrator when we want to itterate promises one after other
const generator = function* () {
  yield new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1);
    }, 1000);
  });
  yield new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(2);
    }, 2000);
  });
};

const generatorObject = generator();

console.log(generator);
console.log(generatorObject);
// console.log(generatorObject.next());

generatorObject.next().value.then((result) => {
  console.log("result ", result);
});

const getObjectsAsync = async () => {
  for (const promise of generatorObject) {
    const result = await promise;
    console.log(result);
  }
};

getObjectsAsync();
