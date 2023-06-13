const arr = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let newArr = arr.map(v=>{
    let r = solution(v*2).filter(w=>w>v)
    return r.length
})
console.log(newArr.filter(v=>v!==0).join("\n"))

function solution(n) {
    const prime = [];
    const arr = Array(n).fill(0);
    
    
    for(let i = 2; i <= n; i++){
        arr[i] = i;
    }
    
    for(let i = 2; i <= n; i++){
        if(arr[i] === 0) continue;
        prime.push(i);
        arr[i] = 0;
        
        for(let j = i * 2; j <= n; j += i){
            if(arr[j] === 0) continue;
            arr[j] = 0;
        }
    }
    
    return prime;
}