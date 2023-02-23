function solution(s) {
    let nowString = s;
    let sum = 0
    let delSum = 0
    while(nowString!=="1"){
        sum++
        let newString = nowString.split("").filter(item=>item === "1");
        delSum += nowString.length-newString.length;
        nowString = newString.length.toString(2)
    }
    return [sum,delSum];
}