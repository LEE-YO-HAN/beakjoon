function solution(s){    
    // return sol1(s)
    return sol2(s)
}

function sol2(s){
    const stack = [];
    for(let i of s){
        stack.push(i)
        if(stack[stack.length-1] === stack[stack.length-2] ){
            stack.pop()
            stack.pop()
        }
    }
    return stack.length === 0 ? 1 : 0;
}

function sol1(s){
    let i = 0
    while(i<s.length){
        if(s[i]===s[i+1]){
            s= s.slice(0,i) +s.slice(i+2)
            i>=1?i--:i
        } else {
            i++
        }
    }
    return s===""?1:0;
}