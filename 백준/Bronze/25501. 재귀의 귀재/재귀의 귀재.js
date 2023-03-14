const [n, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let count = 0
const recursion = (s,l,r) =>{
    count++
    if(l>=r){
        let newCount = count
        count = 0
        return `1 ${newCount}`
    } else if(s[l] !== s[r]){
        let newCount = count
        count = 0
        return `0 ${newCount}`
    } else {
        return recursion(s,l+1,r-1)
    }

}
const isPalindrome = (s) =>{
    return recursion(s,0,s.length-1)
}

for(const item of arr){
    console.log(isPalindrome(item))
}
