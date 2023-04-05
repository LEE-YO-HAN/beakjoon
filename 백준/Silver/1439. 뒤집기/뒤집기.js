const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const SI = input.toString().split("")
const newSI = []
let bool = ""
for(let i=0;i<SI.length;i++){
    if(i===0){
        bool = SI[i]
        newSI.push(bool)
    } else if(SI[i]===bool){
        continue;
    } else {
        bool=SI[i]
        newSI.push(bool)
    }
}
const zero = newSI.filter(v=>v==="0").length
const one = newSI.filter(v=>v==="1").length
console.log(zero<=one?zero:one)
