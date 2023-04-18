const input = require("fs").readFileSync("/dev/stdin").toString().trim();
let len = input.length
let map = new Map()
for(let i =0 ;i<len;i++){
    for(let j =i;j<len;j++){
        const str = input.slice(i,j+1)
        if(map.has(str)){
            continue
        } else {
            map.set(str)
        }
    }
}
console.log(map.size)