function solution(n) {
  let answer = 0;
  // for (let i = 1; i <= n; i++) {
  //   let sum = 0;
  //   for (let j = i; j <= n; j++) {
  //     sum += j;
  //     if (sum === n) {
  //       answer++;
  //       break;
  //     }
  //   }
  // }
  for(let i=0;i<=n;i++){
      if(n%i===0 && i%2===1) answer++;
  }
  return answer;
}