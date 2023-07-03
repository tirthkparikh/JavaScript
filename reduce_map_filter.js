const array = [1, 2, 3, 4, 5, 10];
let ans = array.reduce((result, value) => {
  result += value;
  return result;
}, 10);
console.log(ans, array);

let array2 = array.map((item) => item * 2);
console.log(array2, array);

let array3 = array.filter((item) => item > 4);
console.log(array3, array);

let array4 = array.reduce((result, number) => {
  result.push(number);
  return result;
}, []);
console.log(array4, array);
