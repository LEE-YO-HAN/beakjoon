const input = require("fs").readFileSync("/dev/stdin").toString().trim();

let n = Number(input)
let answer = "@".repeat(n + 2) + "\n"
for (let i = 0; i < n; i++) {
  answer += "@" + " ".repeat(n) + "@" + "\n";
}
answer += "@".repeat(n + 2);
console.log(answer)
