const [n,...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")

for (let i = 0; i < n; i++) {
  let fir = arr[i].split(" ").map(Number)[0];
  let sec = arr[i].split(" ").map(Number)[1];
  let mul = 0;
  let div = 0;
  let max1 = fir;
  let max2 = sec;
  for (let i = 0; i < fir * sec; i++) {
    if (max1 === max2) {
      mul = max1;
      break;
    } else if (max1 > max2) {
      max2 += sec;
    } else {
      max1 += fir;
    }
  }
  for (let j = 1; j < fir * sec; j++) {
    if (fir % j === 0 && sec % j === 0) {
      div = j;
    }
  }
  console.log(mul + " " + div);
}
