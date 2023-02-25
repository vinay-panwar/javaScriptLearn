async function sum(a, b) {
  const add = setTimeout(() => a + b, 2000);
  return add;
}
console.log(await sum(3, 4));
