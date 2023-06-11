const [X,Y,Z] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);
let sum = X+Y+Z
let E1 = X===Y
let E2 = X===Z
let E3 = Y===Z
let Ecnt=0;
if(E1)Ecnt++
if(E2)Ecnt++
if(E3)Ecnt++

if(sum!==180){
    console.log("Error")
} else if(X===60&&Y===60&&Z===60){
    console.log("Equilateral")
} else if(Ecnt!==0){
    console.log("Isosceles")
} else if(Ecnt===0){
    console.log("Scalene")
}