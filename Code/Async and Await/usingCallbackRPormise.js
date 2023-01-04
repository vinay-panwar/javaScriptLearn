function multiply(a, b) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("got the result");
      resolve(a * b);
    }, 1000);
  });
}

function compute(a, callback) {
  return callback(a, a);
}

async function square(a) {
  return await compute(a, multiply).then();
}

square(4).then((res) => {
  console.log(res);
});

<<<<<<< HEAD
<<<<<<< HEAD
=======
Promise.allSettled([square(4)]).then((res) => console.log(res));
>>>>>>> master
=======

Promise.allSettled([square(4)]).then((res) => console.log(res));
>>>>>>> master
// this is an example where await is return a callback rather than promise but used an async keyword which alwasys return a promise
