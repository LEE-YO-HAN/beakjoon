function solution(s) {
    let answer = '';
    let newString = s.split(" ").map(item=>item.split("").map((item,index)=>index===0?item.toUpperCase():item.toLowerCase()).join("")).join(" ")
    
    return newString;
}