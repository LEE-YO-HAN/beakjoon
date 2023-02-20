const [n,...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let newArr1 = [...arr].sort((a, b) => parseFloat(a) - parseFloat(b));
for (let i = 0; i<newArr1.length; i++){
  console.log(newArr1[i])
}