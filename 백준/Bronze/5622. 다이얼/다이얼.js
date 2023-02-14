const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("");
let answer = 0;
input.map(item=>{
    if(item==="A"||item==="B"||item==="C"){
        answer += 3
    }
    if(item==="D"||item==="E"||item==="F"){
        answer += 4
    }
    if(item==="G"||item==="H"||item==="I"){
        answer += 5
    }
    if(item==="J"||item==="K"||item==="L"){
        answer += 6
    }
    if(item==="M"||item==="N"||item==="O"){
        answer += 7
    }
    if(item==="P"||item==="Q"||item==="R"||item==="S"){
        answer += 8
    }
    if(item==="T"||item==="U"||item==="V"){
        answer += 9
    }
    if(item==="W"||item==="X"||item==="Y"||item==="Z"){
        answer += 10
    }
})
console.log(answer)