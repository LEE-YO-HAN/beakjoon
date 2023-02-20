const arr = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let time = arr[0].split(" ").map(Number)
let doTime = Number(arr[1])
console.log((time[0]*60+time[1])+doTime<1440?(Math.floor(((time[0]*60+time[1])+doTime)/60))+" "+((time[0]*60+time[1])+doTime)%60:Math.floor((((time[0]*60+time[1])+doTime)-1440)/60)+" "+(((time[0]*60+time[1])+doTime)-1440)%60)