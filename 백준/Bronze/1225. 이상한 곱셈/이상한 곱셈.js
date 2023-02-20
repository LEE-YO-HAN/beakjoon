const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ").map(item=>item.split(""));;
let fir = input[0];
let sec = input[1];
let sum = 0;

  // fir.map((item1) => {
  //   sec.map((item2) => {
  //     sum += item1 * item2;
  //   });
  // });
  for (let i = 0; i < input[0].length; i++) {
    for (let j = 0; j < input[1].length; j++) {
      sum += +fir[i] * +sec[j];
    }
  }

console.log(sum);