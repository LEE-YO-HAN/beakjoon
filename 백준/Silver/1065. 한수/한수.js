const input = require("fs").readFileSync("/dev/stdin").toString().trim();
let n = input;
let answer = 0;

if (n < 100) {
  answer = n;
} else if (n === 1000) {
  answer = 144;
} else {
  answer += 99;
  for (let i = 100; i <= n; i++) {
    let split = i
      .toString()
      .split("")
      .map((item) => Number(item));
    let fir = split[0];
    let sec = split[1];
    let thr = split[2];
    if (fir - sec === sec - thr) {
      answer += 1;
    }
  }
}
console.log(answer);
