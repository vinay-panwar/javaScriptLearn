// function multiply(a, b) {
//   return a * b;
// }

function toCompute(a, callback) {
  return callback(a, a);
}

function square(a) {
  return toCompute(a, (a, b) => {
    return a * b;
  });
}

console.log(square(4));
