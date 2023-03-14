const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const star = (i,j,num) =>{
    if(i % 3 == 1 && j % 3 == 1) {
    lines.push(" ")
  } else {
    if(num == 1) {
      lines.push("*")
    } else {
      star(parseInt(i/3), parseInt(j/3), parseInt(num/3))
    }
  }
}

const printStars = (num) =>{
    for(let i = 0; i < num; i++) {
    for(let j = 0; j < num; j++) {
      star(i, j, num)
    }
    lines.push("\n")
  }
}

const lines = []
printStars(input)
console.log(lines.join(""))