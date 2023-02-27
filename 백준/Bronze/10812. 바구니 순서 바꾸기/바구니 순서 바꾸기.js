const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);
const baskets = new Array(n).fill().map((_, i) => i + 1);

for (let i = 1; i <= m; i++) {
  const [start, end, mid] = input[i].split(' ').map(Number);
  const selected = baskets.splice(mid - 1, end - mid + 1);
  baskets.splice(start - 1, 0, ...selected);
}

console.log(baskets.join(' '));