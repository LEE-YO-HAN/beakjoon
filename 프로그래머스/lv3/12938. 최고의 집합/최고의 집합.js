function solution(n, s) {
  let answer = [];
  if (n > s) {
    answer.push(-1);
  } else {
    for (let i = 0; i < n; i++) {
      answer.push(Math.floor(s / n));
    }
    if (s % n !== 0) {
      for (let i = 0; i < s % n; i++) {
        answer[answer.length - 1 - i] += 1;
      }
    }
  }
  return answer;
}