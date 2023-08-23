// 시간초과로 6%에서 실패
// 구글링링을 통해서 본 결과 node.js로 문제를 푼 사람이 확인되지 않음
// Chat-GPT를 통해 확인해도 내 풀이와 다른 해법을 보여주지 않고 있음
// 다른 풀이 필요

const [n, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let deque = []
let ans = ""

arr.forEach(cmdLine)

console.log(ans)

function cmdLine(command){
    const [cmd, num] = command.split(" ");
    switch (cmd) {
    case '1':
      deque.unshift(num);
      break;
    case '2':
      deque.push(num);
      break;
    case '3':
      ans += deque.length ? deque.shift() + '\n' : '-1\n';
      break;
    case '4':
      ans += deque.length ? deque.pop() + '\n' : '-1\n';
      break;
    case '5':
      ans += deque.length + '\n';
      break;
    case '6':
      ans += (deque.length === 0 ? 1 : 0) + '\n';
      break;
    case '7':
      ans += (deque.length ? deque[0] : -1) + '\n';
      break;
    case '8':
      ans += (deque.length ? deque[deque.length - 1] : -1) + '\n';
      break;
  }
}
