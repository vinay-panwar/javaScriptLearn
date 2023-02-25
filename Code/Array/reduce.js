const list = [
  { user: "user" },
  { user: "user4" },
  { user: "user" },
  { user: "user3" },
  { user: "user5" },
  { user: "user4" },
  { user: "user3" },
];

const array = [1, 1, 12, , 3, 2, 1, 13];

const uniqueIds = [];

const newList = list.reduce((user, value, index) => {
  if (!uniqueIds.includes(value.user)) {
    uniqueIds.push(value.user);
    user.push(value);
  }
  return user;
}, []);
console.log(newList);

const usingUniques = array.reduce(
  (unique, item) => (unique.includes(item) ? unique : [...unique, item]),
  []
);
console.log(...usingUniques);
