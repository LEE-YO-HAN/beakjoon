function solution(n, words) {
    const member = new Array(n).fill(0)
    let answer = [0,0]
    let check = []
    for(let i = 0;i<words.length;i++){
        member[i%n] += 1
        if(i===0) {
            check.push(words[i])
            continue
        }
        const found = check.indexOf(words[i])
        if(found===-1){
            let len = check.length
            let prev = check[len-1]
            let last = prev[prev.length-1]
            if(last !== words[i][0]){
                answer[0] = i%n+1
                answer[1] = member[i%n]
                console.log(check)
                break
            }
        } else {
            answer[0] = i%n+1
            answer[1] = member[i%n]
            console.log(check)
            break
        }
        check.push(words[i])
        
    }
    return answer;
}