//if we throw error in try block (if there is error in try block we can catch that in ctach block)

try {
  const messages = "hi";
  throw new Error("tirth");
} catch (error) {
  console.error(error);
}

// below we can see resolve and reject decide then block will run or catch/error in then
// also if only error is there is try block catch will run which will run reject and vice versa

const myPromise = new Promise((resolve, reject) => {
  try {
    let data = fetch("https://api.kanye.rest/");
    resolve(data);
  } catch (err) {
    console.log("catch inside promise", err);
    reject(err);
  }
})
  .then((data) => data.json())
  .then((data) => {
    console.log(1, "second then");
    return data;
  })
  .then(
    (data) => {
      console.log(data, "3rd then");
      return data;
    },
    (err) => {
      console.log(err, "then handel err");
    }
  )
  .catch((err) => {
    console.log(err, "catch handel err");
    return err;
  })
  .finally((data) => {
    console.log(2, data);
  });
