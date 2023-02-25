document.write("array : <br>");

let array = [1, 2, 3, 4, 5];
for (i of array) {
  document.write(i);
  document.write(" ");
}
document.write("<br>");
document.write("<br>Associative arrays : <br>");

let associativeArray = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
};
for (i in associativeArray) {
  document.write("keys : ", i, " <T>value : ", associativeArray[i]);
  document.write("<br>");
}

document.write("<br>");
document.write("array of Year months  : <br>");

document.write("<br>using reduce method of array.");
const reduce = array.reduce(function (result, item) {
  let temp = result + item;
  document.write("<br>", item, " Reduce value : ", temp);
  return (result += item);
}, 0);

document.write("<br>final returned value by reduce : ", reduce);

document.write("<br><br>using map method of array.");

const map = array.map(function (item) {
  document.write("<br>", item, " Mapped value : ", item * item);
  return item * item;
});
document.write("<br>final returned value by map, ", map);

document.write("<br>");
let filter = array.filter(function (element) {
  let val;
  if (element % 2 == 0) {
    val = element;
  } else {
    val = 0;
  }
  document.write("<br>", element, " Filtered value : ", val);
  return val;
});
document.write("<br>final returned value by filter : ", filter);

let students = [
  { name: "Quincy", grades: 80 },
  { name: "Jason", grades: 84 },
  { name: "Alexis", grades: 100 },
  { name: "Sam", grades: 96 },
  { name: "Katie", grades: 65 },
];

let studentGrades = students.filter(function (ele) {
  return ele.grades >= 70;
});

for (i of studentGrades) {
  document.writeln("<br>", i.name, " : ", i.grades);
}

document.write("<br><br>using map method of array.");
let find = array.find(function (ele) {
  if (ele >= 3) {
    return ele;
  }
});
document.write("<br>");
document.writeln(find);
document.write("<br>");
document.write("<br>");

array.forEach(function (ele, index) {
  document.write(ele, " ", index, "<br>");
  console.log(ele);
});

document.write("<br>Using find method of Array : ");
let findNumber = array.find(function (ele) {
  if (ele == 1) {
    return ele;
  }
});
document.write(findNumber);

document.write("<br>Using find method of Array : ");
let nfindNumber = array.find((ele) => {
  if (ele === 2) {
    return 2;
  }
});

document.write(nfindNumber);
