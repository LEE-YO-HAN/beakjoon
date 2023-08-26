function solution(n) {
    let ans = [0, 1];
    for(let i = 2;i <= n; i++){
        ans[i] = (ans[i-1] + ans[i-2]) % 1234567;
    }
    return ans[n]
}
