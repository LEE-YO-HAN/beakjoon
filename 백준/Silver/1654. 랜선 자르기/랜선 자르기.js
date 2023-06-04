const [n, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
let [K,N] = n.split(" ").map(Number)
arr.sort((a,b)=>a-b)
let max = arr[arr.length-1]
let min = 1
for(let i = arr[arr.length-1];i>=0;i--){
    let mid = Math.floor((max+min)/2)
    let cnt = 0
    arr.forEach(v=>{
        cnt+= Math.floor(v/mid)
    })

    if(cnt>=N) {
        min = mid+1
    } else {
        max = mid-1
    }
    if(max<min)break
}
console.log(max)
