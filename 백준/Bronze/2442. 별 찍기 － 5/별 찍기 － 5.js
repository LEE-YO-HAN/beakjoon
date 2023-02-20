const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")

let N = input[0]
function stars(N) {
  let answer = "";
  let firstStarBlank=(N * 2 - 1 - 1);
  let allWidth = (N*2-1)

  for (let i = 1; i <= N; i++) {
    if (i === 1) {
      answer =
        answer +
        " ".repeat(firstStarBlank/2) +
        "*".repeat(1) +
        "\n";
    } else {
      answer = answer + " ".repeat((allWidth-(i*2-1))/2) + "*".repeat(i*2-1)+"\n"

    }
  }
  return answer;
}

console.log(stars(N));