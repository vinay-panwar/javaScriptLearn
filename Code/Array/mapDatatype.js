let arr = [
  ["Sanyam", 21],
  ["vanshika", 20],
];

let map = new Map(arr);
map.set("sanyam", 214);

// map.set(arr)
console.log(map);
console.log(typeof map);
console.log(map.keys());
console.log(map.values());

map.set([12, 12, 12], 214);
console.log(map);
