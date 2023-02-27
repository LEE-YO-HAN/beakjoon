const [n, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
arr.forEach(item=>{
    let APB = item.split("")
    console.log(`${APB[0]+APB[APB.length-1]}`)
})