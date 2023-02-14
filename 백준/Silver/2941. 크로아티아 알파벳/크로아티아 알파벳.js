const input = "0" + require("fs").readFileSync("/dev/stdin").toString().trim() + "0";
let c1 = input.split("c=").length - 1
let c2 = input.split("c-").length - 1
let dz = input.split("dz=").length - 1
let d = input.split("d-").length - 1
let lj = input.split("lj").length - 1
let nj = input.split("nj").length - 1
let s = input.split("s=").length - 1
let z = input.split("z=").length - 1
console.log(input.length-2-(c1+c2+dz+d+lj+nj+s+z))
