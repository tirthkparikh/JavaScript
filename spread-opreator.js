//shallow copy of object

const countryPop = {
  Germany: 83,
  Brazil: 212,
  Egypt: 102,
  Canada: {
    pop: 38,
  },
};

const countryPopCopy = { ...countryPop };

console.log("-----");

countryPopCopy.India = 38; //if i add new value in main object no issues
countryPopCopy.Canada.pop = 45; //this is object inside object this will change for both obj

console.log(countryPop);

console.log(countryPopCopy);

///////////////
// array shallow copy if we copy 2d array and change value in one other will be affected

const prices = [[10], [20], [30]];

console.log(prices);

const copy = [...prices];

console.log(copy);

console.log("-------");

prices[0].pop();
console.log(prices);

console.log(copy);

//////////////////////////////////////////////////

var obj1 = {
  id: 1,
  company: "GFG",
};
var obj2 = { ...obj1 };
obj2.id = 2;
console.log(obj1.id);
console.log(obj2.id);
