const [X,Y,Z] = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ").map(Number).sort((a,b)=>a-b);
if(X===Y&&X===Z&&Y===Z){
    console.log(X*3)
} else if(X+Y>Z){
    console.log(X+Y+Z)
} else if(Z>=X+Y&&X!==Y){
    console.log(X+Y+(X+Y-1))
} else if(Z>=X+Y&&X===Y){
    console.log(X+Y+(X+Y-1))
}