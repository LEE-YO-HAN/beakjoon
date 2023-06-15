const input = +require("fs").readFileSync("/dev/stdin").toString().trim();
let [n,...pt] = (input+1).toString(2).split("")
let cvt = pt.map(v=>{
    if(v==="0"){
        return 4
    }
    return 7
})
let thisCase =cvt.join("")
console.log(thisCase)