function solution(n, works) {
    let answer = 0;
    let reduceNum = works.reduce((acc, cur) => acc + cur, 0) - n;
    let sortArr = works.sort((a, b) => b - a);
    let sortArrLength = sortArr.length;

    if (reduceNum <= 0) {
        return answer;
    }
    if(sortArrLength===1){
        return (sortArr[0] - n) ** 2
    }
    
    let index = 0;
    for (let i = 1; i <= n; i++) {
      // let ArrIndex = index % sortArrLength;
      sortArr[index]--;
      // sortArr.sort((a, b) => b - a);
        for(let j = 0;j<sortArrLength;j++){
            if(sortArr[index]<sortArr[j]){
                index = j
                break
            } 
        }
    }
    sortArr.forEach(item => {
      answer += item ** 2;
    });
    
  return answer;
}
