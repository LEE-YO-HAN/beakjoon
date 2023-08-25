const [n, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

// 큐 2 문제와 유사한 방법으로 구현방식 변경
let deque = [];
let front = 0; 
let back = -1; 

let ans = "";

arr.forEach(cmdLine => {
  const [cmd, num] = cmdLine.split(' ');
  switch (cmd) {
    case "1":
      deque[--front] = num; 
      break;
    case "2":
      deque[++back] = num; 
      break;
    case "3":
      if (front <= back) {
        ans += deque[front++] + "\n"; 
      } else {
        ans += "-1\n";
      }
      break;
    case "4":
      if (front <= back) {
        ans += deque[back--] + "\n"; 
      } else {
        ans += "-1\n";
      }
      break;
    case "5":
      ans += (back - front + 1) + "\n"; 
      break;
    case "6":
      ans += (front > back ? "1" : "0") + "\n"; 
      break;
    case "7":
      ans += (front <= back ? deque[front] : "-1") + "\n"; 
      break;
    case "8":
      ans += (front <= back ? deque[back] : "-1") + "\n"; 
      break;
  }
});

console.log(ans)

// 기존 풀이 (시간초과)
// let deque = []
// let idx = -1
// let ans = ""

// arr.forEach(cmdLine)

// console.log(ans)

// function cmdLine(command){
//     const [cmd, num] = command.split(" ");
//     switch (cmd) {
//     case "1":
//       deque.unshift(num);
//       idx++
//       break;
//     case "2":
//       deque.push(num);
//       idx++
//       break;
//     case "3":
//       ans += (idx ? deque.shift() : -1) + "\n";
//       idx--
//       break;
//     case "4":
//       ans += (idx ? deque.pop() : -1) + "\n";
//       idx--
//       break;
//     case "5":
//       ans += (idx+1) + "\n";
//       break;
//     case "6":
//       ans += (idx===-1 ? 1 : 0) + "\n";
//       break;
//     case "7":
//       ans += (idx>=0 ? deque[0] : -1) + "\n";
//       break;
//     case "8":
//       ans += (idx>=0 ? deque[idx] : -1) + "\n";
//       break;
//   }
// }