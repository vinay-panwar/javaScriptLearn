function sum(x, y) {
  const a = new Promise((res, rej) => {
    setTimeout(() => {
      res(x + y);
    }, 0);
  });
  return a;
}
const result = await sum(3, 5);
console.log(result);
// console.log(await sum(3, 5));
// console.log("Hello");
