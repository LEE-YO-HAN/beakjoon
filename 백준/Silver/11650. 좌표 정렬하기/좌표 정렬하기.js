const [n, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
let newArr = arr.map((item) => item.split(" ").map(Number));
newArr.sort((a, b) => {
  if (a[0] === b[0]) {
    return a[1] - b[1];
  } else {
    return a[0] - b[0];
  }
});
let = newArr2 = newArr.map(item=>item.join(" "))
console.log(newArr2.join("\n"))