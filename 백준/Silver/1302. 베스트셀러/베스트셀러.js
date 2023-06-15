const [n, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

// let map = new Map()
// let words = []
// arr.forEach(v=>{
//     if(map.has(v)){
//         map.set(v,map.get(v)+1)
//     } else {
//         map.set(v,1)
//         words.push(v)
//     }
// })

// let ans =""

// words.forEach((v,i)=>{
//     if(i===0){
//         ans=v
//     } else {
//         let a = map.get(ans)
//         let b = map.get(v)
//         if(a<b){
//             ans = v
//         }
//         if(a===b){
//             let aChar = ans.charCodeAt(0)
//             let bChar = v.charCodeAt(0)
//             if(aChar>bChar){
//                 ans=v
//             }
//         }
//     }
// })
// console.log(ans)

let maxCount = 0;
let maxName = "";
const dict = {};
arr.forEach(name => {
    if (dict[name]) dict[name]++;
    else dict[name] = 1;
    if (dict[name] === maxCount && name < maxName) maxName = name;
    else if (dict[name] > maxCount) {
        maxName = name;
        maxCount = dict[name];
    }
});
console.log(maxName);