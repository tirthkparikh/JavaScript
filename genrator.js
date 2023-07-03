//our own async iterator

const counter = function* () {
  // pause here and return the generator
  console.log("This is the first log");
  yield 1;
  console.log("this is after yield 1");
  yield 2;
  yield 3;
};

console.log(counter);

const counterGenerator = counter();
console.log(counterGenerator);

console.log(counterGenerator.next());
console.log(counterGenerator.next());
console.log(counterGenerator.next());
console.log(counterGenerator.next());
console.log(counterGenerator.next());
console.log(counterGenerator.next());

//infinite gen
const counter1 = function* () {
  let i = 0;
  while (true) {
    yield i;
    i++;
  }
};

const counterGenerator1 = counter1();

let count = 0;

while (count < 5) {
  console.log(counterGenerator1.next());
  count++;
}

//with loops

const counter3 = function* () {
  // pause here and return the generator
  yield 1;
  yield 2;
  yield 3;
};

console.log(counter3);

const counterGenerator3 = counter3();

console.log(counterGenerator3);

for (const count of counterGenerator3) {
  console.log(count);
}

let counterObject = counterGenerator3.next();
console.log(counterObject);

while (counterObject.done === false) {
  console.log(counterObject.value);
  counterObject = counterGenerator3.next();
  console.log(counterObject);
}

console.log("All done!");
