const [n, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
let N =+n
let B = arr.map(item=>item.split(" ").map(Number))

let minX;
let maxX;
let minY;
let maxY;
B.forEach((v,i)=>{
    let x = v[0]
    let y = v[1]
    if(i===0){
        minX = x
        maxX = x
        minY = y
        maxY = y
    } else {
        if(x>maxX)maxX=x
        if(x<minX)minX=x
        if(y>maxY)maxY=y
        if(y<minY)minY=y
    }
})

let ans = (maxX-minX)*(maxY-minY)
console.log(ans)
