const arr = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let height = arr[0].split(" ")[0];
let width = arr[0].split(" ")[1];

let newArr = arr.filter((item, index) => index !== 0);

let countArr = [];
let countArr1 = [];

let count = 0;
let count1 = 0;

let answer1 = height * width;
let answer2 = height * width;

let condition = "W";
let condition1 = "B";

for (let i = 0; i <= height - 8; i++) {
  let condition = "W";
  let condition1 = "B";
  for (let j = 0; j <= width - 8; j++) {
    newArr.forEach((item, index) => {
      if (index >= i && index < i + 8) {
        item.split("").forEach((item1, index1) => {
          if (index1 >= j && index1 < j + 8) {
            if (item1 !== condition) {
              count++;
              if (index1 !== j + 7) {
                if (condition === "W") {
                  condition = "B";
                } else {
                  condition = "W";
                }
              }
            } else {
              if (index1 !== j + 7) {
                if (condition === "W") {
                  condition = "B";
                } else {
                  condition = "W";
                }
              }
            }

            if (item1 !== condition1) {
              count1++;
              if (index1 !== j + 7) {
                if (condition1 === "W") {
                  condition1 = "B";
                } else {
                  condition1 = "W";
                }
              }
            } else {
              if (index1 !== j + 7) {
                if (condition1 === "W") {
                  condition1 = "B";
                } else {
                  condition1 = "W";
                }
              }
            }
          }
        });
      }
    });
    countArr.push(count);
    countArr1.push(count1);
    answer1 > count ? (answer1 = count) : answer1;
    answer2 > count1 ? (answer2 = count1) : answer2;
    count = 0;
    count1 = 0;
  }
}
console.log(answer1 > answer2 ? answer2 : answer1);