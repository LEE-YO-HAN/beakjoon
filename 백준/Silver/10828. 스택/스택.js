const [n, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let newArr = arr.map(item=>item.split(" "))

let stack = []
let method = {
    push:(item)=>stack.push(item),
    top:()=> stack[stack.length-1] || -1,
    pop:()=> stack.pop() || -1,
    size:()=> stack.length,
    empty:()=> stack.length===0?1:0,
}

let answer = []
newArr.forEach(item=>{
    // item
    item[0]==="push"?method.push(item[1]):answer.push(method[item[0]]())
})
console.log(answer.join("\n"))
