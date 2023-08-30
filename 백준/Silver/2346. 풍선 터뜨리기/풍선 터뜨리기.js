const [n, balloon] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const N = +n
const balloons = balloon.split(' ').map(Number);

console.log(solution(N, balloons));

function solution(N, balloons){
    const check = new Array(N).fill(false);
    check[0] = true;
    let poped = 1;
    const answer  = [1];
    let index = 0;

    while(true) {
        if(poped === N) {
            break;
        }
        
        let count = 0;
        const value = balloons[index];
        
        if(value > 0) {
            while(count < value) {
                if(index + 1 > balloons.length - 1) {
                    index = 0;
                    count = check[0] ? count : ++count;
                }
                
                else {
                    index++;
                    count = check[index] ? count : ++count;
                }
            }
        }
        
        else {
            while(count < Math.abs(value)) {
                if(index - 1 < 0) {
                    index = balloons.length - 1;
                    count = check[index] ? count : ++count;
                }
                
                else {
                    index--;
                    count = check[index] ? count : ++count;
                }
            }
        }
        check[index] = true;
        answer.push(index + 1);
        poped++;
    }

    return answer.join(' ')
}
