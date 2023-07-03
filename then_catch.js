//below is playground to understand promise chaining and then and catch blocks

//one can use .then() as many as they want,
//also one can use.catch(), one can put.then()
// after.catch() also, one can put.then() or.catch()
// after finally() also, one can say nothing is
// defined where to put what and how many times
//  but due to this liberty it does not means you starts
// chaining in whatsoever manner you want,
// use.then(), .catch() and.finally() in proper manner and meaningful way.

// → js will only go through .catch() if it js is looking for error handler, once error
// is handled, js will only look for .then() or finally() whichever is present in
// chainging and in between if .catch() is present js will ignore those .catch()

// we can use catch block as errorhandler or even then as error handler by passing second function in arrgument as shown below
// error are always handeled in next handler not on same step
//finally is just used to run some functions it would run irrespective of the data
// it wont show data or return data from promise chaining

const dataPromise = fetch("https://api.kanye.rest/");

const data = dataPromise
  .then((data) => data.json())
  .then((data) => {
    console.log(1);
    return data;
  })
  .then(
    (data) => {
      console.log(data);
      return data;
    },
    (err) => {
      console.log(err, "then handel prom");
    }
  )
  .catch((err) => {
    console.log(err);
    return err;
  })
  .catch((err) => {
    console.log(err);
    return err;
  })
  .finally((data) => {
    console.log(2, data);
  })
  .then((err) => {
    console.log(3, err);
    return err;
  })
  .catch((err) => console.log(err))
  .then((err) => console.log(err, "err"))
  .catch((err) => console.log(err));
