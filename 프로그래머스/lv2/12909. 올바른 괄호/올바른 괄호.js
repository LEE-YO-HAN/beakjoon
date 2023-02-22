function solution(s){
    let answer = false;
    if(s.length%2!==0) return answer;
    let sum = 0
    let newString = s.split("")
    for(let i = 0;i<newString.length;i++){
        newString[i]==="("?sum++:sum--
        if(sum<0)break
    }
    sum===0?answer=true:false
    return answer;
}