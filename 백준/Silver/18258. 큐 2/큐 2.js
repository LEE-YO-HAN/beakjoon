const [N, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let front = 0;
let back = -1;
let queue = [];

let ans = ""

arr.forEach(v=>{
    const [cmd, num] = v.split(' ');
    switch (cmd) {
        case 'push':
        push(+num);
        break;
        case 'pop':
        ans += pop() + '\n';
        break;
        case 'size':
        ans += size() + '\n';
        break;
        case 'empty':
        ans += empty() + '\n';
        break;
        case 'front':
        ans += frontValue() + '\n';
        break;
        case 'back':
        ans += backValue() + '\n';
        break;
    }
})

console.log(ans)

function push(x) {
  back++;
  queue[back] = x;
}

function pop() {
  if (front > back) return -1;
  return queue[front++];
}

function size() {
  return back - front + 1;
}

function empty() {
  return front > back ? 1 : 0;
}

function frontValue() {
  if (front > back) return -1;
  return queue[front];
}

function backValue() {
  if (front > back) return -1;
  return queue[back];
}
