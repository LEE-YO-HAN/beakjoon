function solution(s) {
    let answer = '';
    let newArr = s.split(" ").map(Number).sort((a,b)=>a-b)
    answer = `${newArr[0]} ${newArr[newArr.length-1]}`
    return answer;
}