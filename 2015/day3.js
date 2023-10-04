const fs = require('fs');

const input = fs.readFileSync('day3.txt', 'utf8');
const visited = new Set(['0-0']);
let x = 0, y = 0;

for (let i = 0; i < input.length; i++) {
  switch (input[i]) {
    case '^':
      x++;
      break;
    case 'v':
      x--;
      break;
    case '>':
      y++;
      break;
    case '<':
      y--;
      break;
  }
  visited.add(`${x};${y}`);
}

console.log(visited.size);