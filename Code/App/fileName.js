// console.log(__filename);
// console.log(module);

import { Module } from "module";

// console.log(__dirname);
setTimeout(() => {
  console.log(`hello`);
}, 2000);
// console.log(module);
const name = require("./storageApp");
console.log(name);
