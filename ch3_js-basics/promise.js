// Unsettled Promise
let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let x = Math.floor(Math.random() * 10);
    if (x > 6) {
      resolve("Greater than 6");
    } else {
      reject("Lower than 6");
    }
  }, 1000);
});

promise
  .then((text) => console.log("Succeed :", text))
  .catch((text) => console.log("Failed :", text));

console.log("Printing ...");

// Settled Promise

promise = Promise.resolve(42);
promise
  .then((value) => console.log("Resolve :", value))
  .catch((err) => console.log("Never Executed !")); // Will never executed

promise = Promise.reject(42);
promise
  .then((err) => console.log("Never Executed !")) // Will never executed
  .catch((value) => console.log("Reject :", value));

// Non-promise Thenables

// Object has a then() method and accept args resolve and reject
let resolveThenable = {
  then: function (resolve, reject) {
    resolve(45);
  },
};

let rejectThenable = {
  then: function (resolve, reject) {
    reject(45);
  },
};

promise = Promise.resolve(resolveThenable);
promise.then((value) => console.log("Resolve :", value));

let rejectPromise = Promise.resolve(rejectThenable);
rejectPromise.catch((value) => console.log("Reject : ", value));

// Executor Errors
let errorPromise = new Promise((resolve, reject) => {
  throw new Error("Explosion !");
});
errorPromise.catch((err) => {
  console.log(err.message);
});
