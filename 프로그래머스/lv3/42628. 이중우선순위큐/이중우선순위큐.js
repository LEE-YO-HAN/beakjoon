function solution(operations) {
  let answer = [];
  operations.map((item) => {
    let split = item.split(" ");
    let cretica = split[0];
    let creticaNum = Number(split[1]);
    if (cretica === "I") {
      answer.push(creticaNum);
    } else if (cretica === "D") {
      if (creticaNum === 1) {
        answer = answer
          .sort((a, b) => b - a)
          .filter((item, index) => index !== 0);
      } else if (creticaNum === -1) {
        if (answer.length === 0) {
          return;
        } else {
          answer = answer
            .sort((a, b) => a - b)
            .filter((item, index) => index !== 0);
        }
      }
    }
  });
  answer.sort((a, b) => b - a);
  answer = [
    answer[0] === undefined ? 0 : answer[0],
    answer[answer.length - 1] === undefined ? 0 : answer[answer.length - 1],
  ];
  return answer;
}
